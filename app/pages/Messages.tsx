"use client"
import api from '@/app/utils/Axios'
import React, { useEffect, useState } from 'react'
import { MessageCircleMore } from 'lucide-react';
import Link from 'next/link';


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
                    <Link
                        href={`dashboard/${message.id}`}
                        key={message.id}
                        className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        <div className='flex gap-4 justify-center items-center'><MessageCircleMore /> {message.msg}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
