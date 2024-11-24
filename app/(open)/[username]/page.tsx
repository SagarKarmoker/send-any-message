"use client";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";  // Avatar components
import api from "@/app/utils/Axios";

export default function UsernamePage() {
    const { data: session, status } = useSession();
    const pathname = usePathname();

    // Extract username from the path (the recipient)
    const recipientUsername = pathname.split('/')[1];

    const [msg, setMsg] = useState<string | null>('');
    const [suggestions, setSuggestions] = useState<string[]>([]); // To hold AI suggestions

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    const handleSubmitMsg = async () => {
        try {
            const reponse = await api.post('/message', {
                msg: msg,
                username: recipientUsername
            })

            if (reponse.status === 201) {
                alert("Message send successfully")
                setMsg('')
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleAIMessageSuggestion = async () => {
        try {
            // This would be a call to your AI suggestion API or function
            const response = await fetch("/ai-suggestions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: "suggest an anonymous message" }),
            });

            const data = await response.json();
            if (data.suggestions) {
                setSuggestions(data.suggestions); // Assuming the API returns a list of message suggestions
            }
        } catch (error) {
            console.error("Error fetching AI suggestions:", error);
        }
    };

    const recipientAvatar = "https://via.placeholder.com/150";

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
            {/* Card container with modern look */}
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full">
                {/* Avatar and Username of the recipient */}
                <div className="flex items-center justify-center mb-6">
                    <Avatar className="mr-4">
                        <AvatarImage src={recipientAvatar} />
                        <AvatarFallback>{recipientUsername?.slice(0, 1).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="text-xl font-semibold text-gray-800">
                        <p>@{recipientUsername}</p>
                    </div>
                </div>

                {/* Message input area with enhanced style */}
                <div className="relative mb-6">
                    <Textarea
                        value={msg || ''}
                        onChange={(e) => setMsg(e.target.value)}
                        className="w-full bg-gray-100 text-black rounded-xl p-4 h-32 text-sm shadow-lg transition-all focus:ring-2 focus:ring-purple-600 focus:outline-none resize-none"
                        placeholder="Type your anonymous message..."
                    />
                </div>

                {/* AI Suggestions Button */}
                <div className="mb-4 text-center">
                    <Button
                        className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:opacity-90 transition-all"
                        onClick={handleAIMessageSuggestion}
                    >
                        Get AI Message Suggestions
                    </Button>
                </div>

                {/* Suggested Messages */}
                <div className="mb-6">
                    {suggestions.length > 0 && (
                        <div className="space-y-2">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
                                    onClick={() => setMsg(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Submit button */}
                <Button
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 transform transition-all"
                    onClick={handleSubmitMsg}
                >
                    Send Message
                </Button>
            </div>
        </div>
    );
}
