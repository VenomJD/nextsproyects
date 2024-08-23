import { Schema, model, models } from "mongoose";

// Esquema para usuarios
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  });

  export default   models.users || model('users',userSchema)
