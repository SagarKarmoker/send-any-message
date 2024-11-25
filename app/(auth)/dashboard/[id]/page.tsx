"use client"
import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import api from '@/app/utils/Axios';
import { ChevronLeft } from 'lucide-react';

export default function Message() {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [replyText, setReplyText] = useState('');
    const [replies, setReplies] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    // Fetch message data
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await api.get(`/message/${id}`);
                if (response.status === 200) {
                    console.log(response.data)
                    setMessage(response.data.message.msg);
                    setReplies(response.data.message.replay);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching message:', error);
                setLoading(false);
            }
        };

        fetchMessage();
    }, [id]);

    const handleReplySubmit = async () => {
        if (!replyText.trim()) return;

        try {
            const response = await api.put(`/message/${id}`, { text: replyText });
            if (response.status === 200) {
                setReplies(replyText);
                setReplyText('');
            }
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-lg shadow-lg h-screen">
            {loading ? (
                <div className="text-center text-white">Loading...</div>
            ) : (
                <>
                    <ChevronLeft onClick={() => router.back()} />
                    {/* Display message */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <div className="text-xl font-semibold text-gray-900">{message}</div>
                    </div>

                    {/* Display replies */}
                    <div className="space-y-4 mt-6">
                        {replies ? (<div className="bg-white p-4 rounded-lg shadow-lg">
                            <div className="text-sm text-gray-700">{replies}</div>
                        </div>
                        ) : (
                            <>
                                <div className="text-sm text-white">No replies yet.</div>
                                <div className="mt-6 flex flex-col space-y-4">
                                    <textarea
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        placeholder="Write your reply..."
                                        className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                                        rows={4}
                                    ></textarea>

                                    {/* Reply Button */}
                                    <button
                                        onClick={handleReplySubmit}
                                        className="flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                                    >
                                        <Send className="mr-2" />
                                        Reply
                                    </button>
                                </div>
                            </>

                        )}
                    </div>
                </>
            )}
        </div>
    );
}
