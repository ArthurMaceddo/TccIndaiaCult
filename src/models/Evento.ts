import mongoose, { Date, Document, Schema } from "mongoose";

export interface IEvento extends Document {
  Titulo: string;
  Categoria: string;
  DescricaoEvento: string;
  Data: Date;
  image: string;
  artista: string;
  artistaImagem: string;
  Cep: number;
  Pais: string;
  Estado: string;
  Cidade: string;
  TipoBairro: string;
  Bairro: string;
  TipoRua: string;
  Rua: string;
  Numero: number;
  Complemento: string;
}

const eventoSchema = new Schema<IEvento>({
  Titulo: {
    type: String,
    required: true,
  },
  Categoria: {
    type: String,
    required: true,
  },
  DescricaoEvento: {
    type: String,
    required: true,
  },
  Data: {
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
  artistaImagem: {
    type: String,
    required: true,
  },
  Cep: {
    type: Number,
    required: true,
  },
  Pais: {
    type: String,
    required: true,
  },
  Estado: {
    type: String,
    required: true,
  },
  Cidade: {
    type: String,
    required: true,
  },
  TipoBairro: {
    type: String,
    required: false,
  },
  Bairro: {
    type: String,
    required: true,
  },
  TipoRua: {
    type: String,
    required: false,
  },
  Rua: {
    type: String,
    required: true,
  },
  Numero: {
    type: Number,
    required: true,
  },
  Complemento: {
    type: String,
    required: false,
  },
});

const Evento = mongoose.model<IEvento>("Evento", eventoSchema);

export default Evento;
