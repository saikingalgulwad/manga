
import { connectToDatabase } from "@/app/lib/db";
import { users } from "@/app/lib/model/user";

import { NextResponse } from "next/server";


export async function GET(req) {
  
    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get("search");
    await connectToDatabase();

    if (!search) {
        // Return all songs if no query is provided
        const allchapter = await users.find();
        return NextResponse.json(allchapter);
      }
    const chapters = await users.find({ title: { $regex: search, $options: 'i' } }).lean();
     
   

   
   
    
    return NextResponse.json(chapters);
}
