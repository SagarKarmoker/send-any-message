"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming Input is available in your ShadCN UI library
import { redirect } from "next/navigation";

export default function AgeConfirmation() {
    const [dob, setDob] = useState(""); 
    const [isOldEnough, setIsOldEnough] = useState<boolean | null>(null); // Whether the user is old enough
    const [ageConfirmed, setAgeConfirmed] = useState(false);

    const handleDobChange = (e: any) => {
        setDob(e.target.value); // Update date of birth
    };

    const handleAgeConfirmation = () => {
        const currentDate = new Date();
        const birthDate = new Date(dob);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        const month = currentDate.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
            setIsOldEnough(age - 1 >= 13);
        } else {
            setIsOldEnough(age >= 13);
        }

        setAgeConfirmed(true); // Set age confirmed to true
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Age Confirmation</h3>

            <p className="text-white text-center text-sm sm:text-base mb-6">
                Please select your date of birth:
            </p>

            {ageConfirmed ? (
                <div className="text-white text-xl text-center">
                    {isOldEnough
                        ? <>
                            <p>Thank you for confirming your age! You are eligible</p>
                            {
                                setInterval(() => {
                                    redirect("/choice-username");
                                }, 2000)
                            }
                        </>
                        : "Sorry, you must be at least 18 years old to proceed."}
                </div>
            ) : (
                <>
                    <div className="text-white text-lg mb-4 text-center">
                        Please confirm that you are age to continue.
                    </div>
                    <Input
                        type="date"
                        value={dob}
                        onChange={handleDobChange}
                        className="mb-4 w-full sm:w-auto text-black"
                    />
                    <Button onClick={handleAgeConfirmation} className="w-full sm:w-auto">
                        Continue
                    </Button>
                </>
            )}
        </div>
    );
}
