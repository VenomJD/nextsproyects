import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // En desarrollo, usa la caché global para evitar múltiples conexiones
  if (global._mongoClientPromise) {
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = client.connect();
    global._mongoClientPromise = clientPromise;
  }
} else {
  // En producción, siempre crea una nueva conexión
  clientPromise = client.connect();
}

export default clientPromise;
