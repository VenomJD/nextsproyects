
import { Schema, model, models } from "mongoose";

  // Esquema para páginas
  const pageSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true, trim: true  },
    parentPageId: { type: Schema.Types.ObjectId, ref: 'Page' , trim: true },  // Null si es una página principal
    title: { type: String, required: true },
    html: { type: String },
    css: { type: String },
    js: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    subPages: [{ type: Schema.Types.ObjectId, ref: 'Page' }]  // Array de IDs de subpáginas
  });

  const Page = models.Page || model('Page', pageSchema); export { Page };