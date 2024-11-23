import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");

        if (!username || username.length < 3) {
            console.log("Validation failed: Username must be at least 3 characters long");
            return NextResponse.json({
                error: "Username should be at least 3 characters long",
            }, {
                status: 400
            });
        }

        // Check if the username is already taken
        const isUsernameAvailable = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if (isUsernameAvailable) {
            console.log("Username is already taken:", username);
            return NextResponse.json({
                error: "Username is already taken",
                isUsernameAvailable: false,
            }, {
                status: 400
            });
        }

        console.log("Username is available:", username);
        return NextResponse.json({
            message: "Username is available",
            isUsernameAvailable: true,
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse.json({
            error: error.message || "Something went wrong",
        }, {
            status: 500
        });
    }
}
