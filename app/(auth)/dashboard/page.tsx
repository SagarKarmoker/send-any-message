"use client";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';
import Messages from '../../pages/Messages';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Account from '@/app/pages/Account';

export default function UserDashboard() {
    const { data: session, status } = useSession();

    if (!session) {
        redirect("/login");
    }

    console.log(session);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 py-10 px-4">
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl p-8">
                <Tabs defaultValue="account">
                    {/* Tabs List */}
                    <TabsList className="flex space-x-4 border-b-2 border-gray-300 mb-6">
                        <TabsTrigger
                            value="account"
                            className="w-1/2 text-center py-2 font-semibold text-gray-800 hover:text-blue-600 transition duration-200"
                        >
                            Account
                        </TabsTrigger>
                        <TabsTrigger
                            value="password"
                            className="w-1/2 text-center py-2 font-semibold text-gray-800 hover:text-blue-600 transition duration-200"
                        >
                            Inbox
                        </TabsTrigger>
                    </TabsList>

                    {/* Account Tab Content */}
                    <TabsContent value="account" className="space-y-4">
                        <Account session={session} />
                    </TabsContent>

                    {/* Inbox Tab Content */}
                    <TabsContent value="password" className="space-y-4">
                        <Messages />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
