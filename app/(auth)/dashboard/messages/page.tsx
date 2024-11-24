"use client"
import api from '@/app/utils/Axios'
import React, { useEffect, useState } from 'react'

interface Message {
    id: string
    msg: string
    createdAt: string
    user: {
        username: string
        image: string | null
    }
}

export default function Messages() {
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    // Fetch messages when the component mounts
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const respone = await api.get('/message')
                console.log(respone)
                setMessages(respone.data.messages)
            } catch (err: any) {
                setError('Error fetching messages')
            } finally {
                setLoading(false)
            }
        }

        fetchMessages()
    }, [])

    if (loading) {
        return <div className="text-center text-xl">Loading messages...</div>
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Messages</h1>
            <div className="space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        {/* Avatar and Username */}
                        <div className="flex-shrink-0">
                            <img
                                src={message.user.image || '/default-avatar.jpg'}
                                alt={message.user.username}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold text-gray-900">{message.user.username}</div>
                            <div className="text-gray-700">{message.msg}</div>
                            <div className="text-xs text-gray-500 mt-1">
                                {new Date(message.createdAt).toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
