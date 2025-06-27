import { prisma } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const user = await prisma.user.create({
            data : {
                username : Math.random().toString(),
                password : Math.random().toString()
            }
        })

        return NextResponse.json({
            message : "User successfully inserted"
        })
    } catch (error) {
        return NextResponse.json({
            message : "Error while adding user",
        })
    }

}