import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db.connection";
import {Page} from "@/models/pageModel"

export async function GET(){
    try {
        await connectDB();  // Conectar a la base de datos
    
        const pagesList = await Page.find(); 
        return NextResponse.json(pagesList);
      } catch (error) {
        return NextResponse.json({ message: 'No se encontro esa lista de documentos', error: error.message }, { status: 400 });
      }
    }
    export async function POST(request) {
        try {
          await connectDB(); // Conectar a la base de datos
          
          const data = await request.json();
          const newPage = new Page(data); // Crear una nueva instancia de Page
          const savedPage = await newPage.save(); // Guardar la nueva página
          console.log(savedPage);
      
          return NextResponse.json(
            { message: 'Página creada correctamente', savedPage },
            { status: 201 }
          );
        } catch (error) {
          return NextResponse.json(
            { message: 'Error al crear la página', error: error.message },
            { status: 500 }
          );
        }
    }