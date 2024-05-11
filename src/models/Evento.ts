import mongoose, { Document, Schema } from "mongoose";

export interface IEvento extends Document {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  artista: string;
  artistaImage: string;
}

const eventoSchema = new Schema<IEvento>({
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

const Evento = mongoose.model<IEvento>("Evento", eventoSchema);

export default Evento;
