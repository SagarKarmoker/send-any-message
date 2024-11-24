import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function GET(req: NextRequest) {
    const session = await auth();

    if (!session || !session.user?.email) {
        return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                email: session.user.email,
            },
            select: {
                username: true,
                image: true
            },
        });

        if (!user) {
            return NextResponse.json(
                { message: "Username not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Username found", username: user.username, image: user.image },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            { message: "Internal server error", error: error.message },
            { status: 500 }
        );
    }
}
