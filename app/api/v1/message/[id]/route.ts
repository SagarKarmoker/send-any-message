import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const session = await auth();

    if (!session) {
        return NextResponse.json({
            message: "Internal error"
        }, {
            status: 500
        })
    }

    try {
        const { pathname } = req.nextUrl;
        const id = pathname.split('/').pop();

        const message = await prisma.message.findUnique({
            where: {
                id: id,
                userId: session.user?.id
            }
        })

        return NextResponse.json({
            message
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Internal error"
        }, {
            status: 500
        })
    }
}

export async function PUT(req: NextRequest) {
    const session = await auth();

    if (!session) {
        return NextResponse.json({
            message: "Internal error"
        }, {
            status: 500
        })
    }

    try {
        const { pathname } = req.nextUrl;
        const id = pathname.split('/').pop();

        const { text } = await req.json();

        const message = await prisma.message.update({
            where: {
                id: id,
                userId: session.user?.id
            }, 
            data: {
                replay: text
            }
        })

        return NextResponse.json({
            message
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Internal error"
        }, {
            status: 500
        })
    }
}