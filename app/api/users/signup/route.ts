import { connectToDB } from "@/lib/mongoose";
import Users from "@/lib/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody= await request.json();
        const {firstname, lastname, username, email, phone, aadhaar, password} = reqBody;

        const user = await Users.findOne({email});
        if(user) return NextResponse.json({error: "User already exists"}, {status: 400});

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const data = {firstname, lastname, username, email, phone, aadhaar, password: hashedPassword};
        const newUser = new Users(data);
        console.log(newUser);
        const savedUser = await newUser.save();
        console.log(savedUser);

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});

        return NextResponse.json({message: "User created successfully", success: true, savedUser});
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}