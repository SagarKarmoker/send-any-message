"use client"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'

export default function UserDashboard() {
    const { data: session, status } = useSession();

    if (!session) {
        redirect("/login");
    }

    console.log(session);

    return (
        <div>{session.user?.name}</div>
    )
}
