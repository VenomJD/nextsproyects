import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db.connection";
import UserModel from "@/models/userModel"; // Asegúrate de que esta ruta sea correcta

export async function GET(request, { params }) {
  try {
    await connectDB(); // Conectar a la base de datos
    const foundUser = await UserModel.findById(params.id); // Cambiar el nombre de la variable
    if (!foundUser) {
      return NextResponse.json({ message: `Usuario no encontrado con el id ${params.id}` }, { status: 404 });
    }
    return NextResponse.json(foundUser); // Devolver la página encontrada
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  try {

    const data = await request.json();
    const updatedUser = await UserModel.findByIdAndUpdate(params.id, data, { new: true });
    if (!updatedUser) {
      return NextResponse.json({ message: `Usuario no encontrado con el id ${params.id}` }, { status: 404 });
    }
    return NextResponse.json(updatedUser); // Devolver la página actualizada
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    
    const deletedUser = await UserModel.findByIdAndDelete(params.id);
    if (!deletedUser) {
      return NextResponse.json({ message: `Usuario no encontrado con el id ${params.id}` }, { status: 404 });
    }
    return NextResponse.json({ message: `Usuario eliminado con el ID ${params.id}`, deletedUser }); // Devolver confirmación de eliminación
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
