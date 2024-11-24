"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from 'next-auth/react'
import { signOut } from "next-auth/react"

export default function Navbar() {
    const { data: session, status } = useSession(); 

    // console.log(session)

    if (status === "loading") {
        return <div>Loading...</div>; 
    }

    if (!session) {
        return <div>Please log in</div>;
    }

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log('Logout failed:', error);
        }
    };

    return (
        <div className="flex justify-between items-center w-full">
            <Avatar>
                <AvatarImage src={session?.user?.image || '/default-avatar.jpg'} />
                <AvatarFallback>
                    {session?.user?.name?.slice(0, 1) || 'U'} {/* Display first letter of name */}
                </AvatarFallback>
            </Avatar>
            <Button onClick={handleLogout} className="bg-blue-500">
                Logout
            </Button>
        </div>
    );
}
