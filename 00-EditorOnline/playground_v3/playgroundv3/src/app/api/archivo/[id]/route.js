import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db.connection";
import { Page } from "@/models/pageModel"; // Asegúrate de que esta ruta sea correcta

export async function GET(request, { params }) {
  try {
    await connectDB(); // Conectar a la base de datos
    const foundPage = await Page.findById(params.id); // Cambiar el nombre de la variable
    if (!foundPage) {
      return NextResponse.json({ message: `Documento no encontrado con el id ${params.id}` }, { status: 404 });
    }
    return NextResponse.json(foundPage); // Devolver la página encontrada
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  try {

    const data = await request.json();
    const updatedPage = await Page.findByIdAndUpdate(params.id, data, { new: true });
    if (!updatedPage) {
      return NextResponse.json({ message: `Documento no encontrado con el id ${params.id}` }, { status: 404 });
    }
    return NextResponse.json(updatedPage); // Devolver la página actualizada
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    
    const deletedPage = await Page.findByIdAndDelete(params.id);
    if (!deletedPage) {
      return NextResponse.json({ message: `Documento no encontrado con el id ${params.id}` }, { status: 404 });
    }
    return NextResponse.json({ message: `Documento eliminado con el ID ${params.id}`, deletedPage }); // Devolver confirmación de eliminación
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
