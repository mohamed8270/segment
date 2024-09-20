import { getDataFromToken } from "@/helper/getDataFromToken";
import Users from "@/lib/models/userModel";
import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await Users.findOne({_id: userId}).select("-password");
        return NextResponse.json({message: "User found", data: user});
    } catch (e: any) {
        return NextResponse.json({error: e.message}, {status: 400});
    }
}