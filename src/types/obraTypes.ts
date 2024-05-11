// types.ts
export interface ObraBasicInfo {
  Id: String;
  name: String;
  imagem: String;
  dataCriacao: Date;
  artistaId: String;
}

declare global {
  namespace Express {
    interface Request {
      obra?: ObraBasicInfo | null;
    }
  }
}
