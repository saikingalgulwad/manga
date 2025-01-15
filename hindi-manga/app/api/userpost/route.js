import { connectToDatabase } from "@/app/lib/db";
import {  users } from "@/app/lib/model/user";
import { NextResponse } from "next/server";


export async function POST(req) {
    const payload = await req.json();
   
     
    await connectToDatabase();
    
   await users.create(payload);
   
    
    return NextResponse.json({ok:"it is ok"})
}
