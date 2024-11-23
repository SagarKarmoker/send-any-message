"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <h3 className="text-6xl sm:text-4xl font-bold text-white text-center">SAM</h3>
            <p className="text-white mb-6">Send Any Message</p>
            <Button className="w-full sm:w-auto mb-4">Get Started!</Button>
            <p className="text-center text-sm sm:text-base text-white">
                By continuing, you agree to our{" "}
                <span className="underline">Terms of Use</span> and have read and agreed
                to our <span className="underline">Privacy Policy</span>
            </p>
        </div>
    );
}
