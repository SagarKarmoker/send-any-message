"use client"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'

export default function AuthLayout({ children }) {
    const { data: session, status } = useSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <div>
            {children}
        </div>
    )
}
