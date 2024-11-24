import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const session = await auth();

    if(!session){
        return NextResponse.json({
            message: error.message
        }, {
            status: 400
        })
    }

    try {
        const messages = await prisma.message.findMany({
            where: {
                userId: session.user?.id
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        if(messages.length > 0){
            return NextResponse.json({
                message: "Your messages",
                messages
            }, {
                status: 200
            })
        }

        return NextResponse.json({
            message: "No message found"
        }, {
            status: 400
        })

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }
}

export async function POST(req: NextRequest) {
    try {
        const { msg, username } = await req.json();

        if (!msg || !username) {
            return NextResponse.json({
                message: "Message or username not found"
            }, {
                status: 404
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        const message = await prisma.message.create({
            data: {
                msg: msg,
                userId: user.id,
            },
        });

        if (message) {
            return NextResponse.json({
                message: "Message send done"
            }, {
                status: 201
            })
        }

        return NextResponse.json({
            message: "Error while sending message"
        }, {
            status: 400
        })

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }
}