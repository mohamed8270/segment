import Jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function getDataFromToken(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken: any = Jwt.verify(token, process.env.TOKEN_SECRET!);
        
        return decodedToken.id;
    } catch (e: any) {
        throw new Error(e.message);
    }
}