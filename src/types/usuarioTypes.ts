// types.ts
export interface UsuarioBasicInfo {
    _id: string;
    name: string;
    email: string;
    password: string;
  }
  
  declare global {
    namespace Express {
      interface Request {
        usuario?: UsuarioBasicInfo | null;
      }
    }
  }

