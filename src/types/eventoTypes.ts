import { Date } from "mongoose";

// types.ts
export interface EventoBasicInfo {
  id: string;
  Titulo: string;
  Categoria: string;
  DescricaoEvento: string;
  Data: string;
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

declare global {
  namespace Express {
    interface Request {
      evento?: EventoBasicInfo | null;
    }
  }
}
