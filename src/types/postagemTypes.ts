// types.ts
export interface PostagemBasicInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  artista: string;
  artistaImage: string;
}

declare global {
  namespace Express {
    interface Request {
      postagem?: PostagemBasicInfo | null;
    }
  }
}
