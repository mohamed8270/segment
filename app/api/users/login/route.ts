import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import Users from "@/lib/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        const user = await Users.findOne({email});
        if(!user) return NextResponse.json({error: "User not found"}, {status: 400});

        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword) return NextResponse.json({error: "Invalid credentials"}, {status: 400});

        const tokenData = {id: user._id, username: user.username, email: user.email};
        const token  = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'});

        const response = NextResponse.json({message: "Login successful", success: true}, {status: 200});
        response.cookies.set('token', token, {httpOnly: true});

        return response;
    } catch (e: any) {
        return NextResponse.json({error: e.message}, {status: 500});
    }
}