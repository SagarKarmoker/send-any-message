"use client";
import React from 'react'
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <h3 className='text-4xl font-bold'>SAM</h3>
            <Button variant="solid">Get Started!</Button>
        </div>
    )
}
