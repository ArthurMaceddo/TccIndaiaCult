import mongoose, { Document, Schema } from "mongoose";

export interface IPostagem extends Document {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  artista: string;
  artistaImage: string;
}

const postagemSchema = new Schema<IPostagem>({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  artista: {
    type: String,
    required: true,
  },
  artistaImage: {
    type: String,
    required: true,
  },
});

const Postagem = mongoose.model<IPostagem>("Postagem", postagemSchema);

export default Postagem;
