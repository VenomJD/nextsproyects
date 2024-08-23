import { NextResponse } from "next/server";

export function GET(request,{params}){
    console.log(params)

    return NextResponse.json({message:`obteniendo documento ${params.id}...`})

}

export function DELETE(request,{params}){
    console.log(params)

    return NextResponse.json({message:`Eliminando documento ${params.id}...`})

}

export function PUT(request,{params}){
    console.log(params)

    return NextResponse.json({message:`Actualizando documento ${params.id}...`})

}