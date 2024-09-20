import Users from "@/lib/models/userModel";
import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";


connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {token} = reqBody;
        const user = await Users.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});
        
        if(!user) {
            return NextResponse.json({error: "Invalid token"}, {status: 400});
        }

        user.useVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({message: "Email verified successfully", success: true});
    } catch (e: any) {
        return NextResponse.json({error: `Internal Server Error ${e.message}`}, {status: 500});
    }
}