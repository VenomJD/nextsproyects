  import { Schema, model , models} from "mongoose";

  // Esquema para proyectos
  const projectSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
  });

  export default   models.projects || model('projects', projectSchema)