import { auth } from "@/auth";
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
                status: 200
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
                message: "Username is already taken",
                isUsernameAvailable: false,
            }, {
                status: 200
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


export async function POST(req: NextRequest) {
    const session = await auth();

    try {
        const { username } = await req.json();

        if(!username || username.length < 3) {
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

        // Create a new user
        const user = await prisma.user.update({
            where: {
                id: session?.user?.id
            },
            data: {
                username: username,
            }
        })

        if(user){
            console.log("Username updated successfully:", username);
            return NextResponse.json({
                message: "Username updated successfully",
                user: user
            }, {
                status: 200
            });
        }

    } catch (error) {
        return NextResponse.json({
            error: error.message || "Something went wrong",
        }, {
            status: 500
        })
    }
}