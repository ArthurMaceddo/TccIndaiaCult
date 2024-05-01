// types.ts
export interface PostagemBasicInfo {
    _id: string;
    title: string;
    description: string;
  }
  
  declare global {
    namespace Express {
      interface Request {
        postagem?: PostagemBasicInfo | null;
      }
    }
  }

  