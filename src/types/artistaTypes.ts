// types.ts
export interface ArtistaBasicInfo {
  _id: string;
  name: string;
  email: string;
  password: string;
  genre: string;
  description: string;
  image: string;
  banner: string;
}

declare global {
  namespace Express {
    interface Request {
      artista?: ArtistaBasicInfo | null;
    }
  }
}
