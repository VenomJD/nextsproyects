import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db.connection";
import UserModel from "@/models/userModel"

export async function GET(request) {
  try {
    await connectDB(); // Conectar a la base de datos

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (email) {
      // Buscar un usuario por correo electrónico
      const user = await UserModel.findOne({ email: email });
      if (!user) {
        return NextResponse.json({ message: `Usuario no encontrado con el email: ${email}` }, { status: 404 });
      }
      return NextResponse.json(user);
    } else {
      // Obtener todos los usuarios si no se proporciona un correo electrónico
      const usersList = await UserModel.find();
      return NextResponse.json(usersList);
    }
  } catch (error) {
    // Manejo de errores
    return NextResponse.json({ message: 'Error al obtener usuarios', error: error.message }, { status: 500 });
  }
}

    export async function POST(request) {
        try {
          await connectDB(); // Conectar a la base de datos
          
          const data = await request.json();
          const newUser = new UserModel(data); // Crear una nueva instancia de user
          const savedUser = await newUser.save(); // Guardar la nueva página
          console.log(savedUser);
      
          return NextResponse.json(
            { message: 'Usuario Creado Correctamente', savedUser },
            { status: 201 }
          );
        } catch (error) {
          return NextResponse.json(
            { message: 'Error al crear el Usuario', error: error.message },
            { status: 500 }
          );
        }
    }