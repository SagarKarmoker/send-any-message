"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { AtSign } from "lucide-react"; // Using AtSign icon from Lucide

export default function ChoiceUsername() {
    const [username, setUsername] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleUsernameChange = (e : any) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        if (username.length < 3) {
            alert("Username must be at least 3 characters long.");
        } else {
            setIsSubmitted(true);
        }
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Choose Your Username
            </h3>

            {isSubmitted ? (
                <div className="text-white text-lg">
                    <p className="text-center">
                        Thank you! Your username has been set to @<strong>{username}</strong>.
                    </p>
                </div>
            ) : (
                <form className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Username
                        </label>

                        {/* Username Input with Trailing Icon */}
                        <div className="relative mt-2">
                            <Input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="Enter a unique username"
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:border-blue-500"
                            />
                            {/* AtSign icon positioned inside the input field */}
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <AtSign size={20} />
                            </span>
                        </div>
                    </div>

                    <Button
                        onClick={handleSubmit}
                        className="w-full mt-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </Button>
                </form>
            )}

            <p className="text-center text-white text-sm mt-4">
                By choosing a username, you agree to our{" "}
                <span className="underline cursor-pointer">Terms of Service</span> and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
        </div>
    );
}
