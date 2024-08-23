import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db.connection";
import {Page} from "@/models/pageModel"

export async function GET(){
    try {
        await connectDB();  // Conectar a la base de datos
    
        const pagesList = await Page.find();  // Asegúrate de que `Page` es el modelo correcto
    
        return NextResponse.json(pagesList);
      } catch (error) {
        return NextResponse.json({ message: 'Error fetching pages', error: error.message }, { status: 500 });
      }
    }

export async function POST(request){
    const data = await request.json();
    console.log(data);
    return NextResponse.json({message:'creado documento....'})
}