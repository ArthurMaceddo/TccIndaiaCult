import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IObra extends Document {
  Id: String;
  name: String;
  imagem: String;
  dataCriacao: Date;
  artista: String;
}

const obraSChema = new Schema<IObra>({
  name: {
    type: String,
    required: true,
  },
  dataCriacao: {
    type: Date,
    required: true,
  },
  artista: {
    type: String,
    required: true,
  },
});

const Obra = mongoose.model("Obra", obraSChema);

export default Obra;
