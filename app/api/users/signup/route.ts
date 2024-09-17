import { connectToDB } from "@/lib/mongoose";
import Users from "@/lib/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody= await request.json();
        const {firstname, lastname, username, email, phone, password} = reqBody;

        const user = await Users.findOne({email});
        if(user) return NextResponse.json({error: "User already exists"}, {status: 400});

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const data = {firstname, lastname, username, email, phone, password: hashedPassword};
        const newUser = new Users(data);
        const savedUser = await newUser.save();

        return NextResponse.json({message: "User created successfully", success: true, savedUser}, {status: 201});
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}