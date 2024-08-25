import mongoose from 'mongoose';

const conn = {
    isConnected: false
}

export async function connectDB() {
    if (conn.isConnected) return;

    try {
        const db = await mongoose.connect('mongodb://localhost/playgroundDB');
        console.log(db.connection.db.databaseName)
        conn.isConnected = mongoose.connections[0].readyState;

        console.log("Base de datos conectada");
    } catch (err) {
        console.error("Error al conectar a la base de datos", err);
    }
}
