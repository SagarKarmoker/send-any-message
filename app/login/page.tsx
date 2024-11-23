"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function SignIn() {
    const { data: session, status } = useSession();

    if (session) {
        redirect("/choice-username");
    }

    if (status === "loading") {
        return <p>Loading...</p>
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
                Welcome to Our Platform
            </h1>
            <p className="text-lg text-white mb-8 text-center">
                Please sign in to continue.
            </p>
            {
                session ? (
                    <Button
                        onClick={() => redirect("/dashboard")}
                        className="w-full sm:w-auto py-3 px-6 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-blue-50 transition-colors"
                    >
                        Dashboard
                    </Button>
                ) : (
                    <Button
                        onClick={() => signIn("google")}
                        className="w-full sm:w-auto py-3 px-6 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-blue-50 transition-colors"
                    >
                        Login with Google
                    </Button>
                )
            }
            <p className="text-white mt-6 text-sm">
                By signing in, you agree to our{" "}
                <span className="underline cursor-pointer">Terms of Service</span> and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
        </div>
    );
}
