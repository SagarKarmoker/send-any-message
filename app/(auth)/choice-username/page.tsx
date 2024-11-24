"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AtSign } from "lucide-react";
import AuthLayout from "../layout";
import { useDebounceValue } from "usehooks-ts";
import api from "@/app/utils/Axios";
import Navbar from "@/components/Navbar";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ChoiceUsername({ defaultValue = "" }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [debouncedValue, setDebouncedValue] = useDebounceValue(defaultValue, 300);
    const [username, setUsername] = useState(debouncedValue);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [msg, setMsg] = useState('');
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

    // if username got or not
    const { data: session } = useSession();

    if (session?.user?.username) {
        redirect("/dashboard");
    }

    const validateUsername = (value: string) => {
        setIsUsernameValid(value.length >= 3);
        setUsername(value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!isUsernameValid || !isUsernameAvailable) return;

        try {
            await api.post("/username", { username: debouncedValue });
            setIsSubmitted(true);
            await getSession();
        } catch (error) {
            console.log(error);
        }
    };

    const checkUsername = async (username: string) => {
        if (username.length < 3) return;

        try {
            const response = await api.get("/username", {
                params: { username }
            });

            console.log(response)

            if (response.data.isUsernameAvailable) {
                setMsg(response.data.message);
                setIsUsernameAvailable(true);
            } else {
                setMsg("Username already taken!");
                setIsUsernameAvailable(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setDebouncedValue(username);
    }, [username, setDebouncedValue]);

    useEffect(() => {
        if (debouncedValue.length >= 3) {
            checkUsername(debouncedValue);
        }
    }, [debouncedValue]);

    useEffect(() => {
        const checkHaveUsername = async () => {
            try {
                const response = await api.get("/check-username");
                console.log(response)
                if (response.data.username) {
                    redirect("/dashboard");
                }
            } catch (error) {
                console.log(error);
            }
        }

        checkHaveUsername();
    }, []);

    return (
        <AuthLayout>
            <div className="h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                <div className="absolute top-4 right-2 w-full px-4">
                    <Navbar />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                    Choose Your Username
                </h3>

                {isSubmitted ? (
                    <div className="text-white text-lg">
                        <p className="text-center">
                            Thank you! Your username has been set to @<strong>{debouncedValue}</strong>.
                        </p>
                        <Button onClick={() => redirect("/dashboard")} className="w-full mt-4">Dashboard</Button>
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
                            <div className="relative mt-2">
                                <Input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={event => validateUsername(event.target.value)}
                                    placeholder="Enter a unique username"
                                    className={`w-full pl-10 pr-3 py-3 border ${isUsernameValid ? 'border-gray-300' : 'border-red-500'} rounded-md focus:ring-0 focus:border-blue-500`}
                                />
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    <AtSign size={20} />
                                </span>
                            </div>

                            {!isUsernameValid ? (
                                <p className="text-red-500 text-sm mt-2">Username must be at least 3 characters long.</p>
                            ) : isUsernameAvailable ? (
                                <p className="text-green-500 text-sm mt-2">{msg}</p>
                            ) : (
                                <p className="text-red-500 text-sm mt-2">{msg}</p>
                            )}
                        </div>

                        <Button
                            onClick={handleSubmit}
                            className="w-full mt-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            disabled={!isUsernameValid || !isUsernameAvailable}
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
        </AuthLayout>
    );
}
