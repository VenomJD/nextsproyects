
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db.connection";

export function GET(){
    connectDB()
    return NextResponse.json({message:'hello World'})
}