import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        return Response.json({
            message: "Welcome to the API route!",
        })
    } catch (error) {
        return Response.json({
            error: error.message,
        }, {
            status: 500
        })
    }
}