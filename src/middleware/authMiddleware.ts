import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Artista from "../models/Artista";

    const authenticate = (
        async (req: Request, res: Response, next: NextFunction) =>{
            try{
                let token = req.cookies.jwt;
                console.log(token);

                if(!token) {
                    res.status(401);
                    throw new Error("Não autorizado, token não encontrado");
                }

                const jwtSecret = process.env.JWT_SECRET || "";
                const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

                if (!decoded || !decoded.artistaId) {
                    res.status(401);
                    throw new Error("Não autorizado, artistaId não encontrado");
            }

            const artista = await Artista.findById(decoded.artistaId, "_id name email" );

            if (!artista) {
                res.status(401);
                throw new Error("Não autorizado, token invaliado")
            }

            req.artista = artista;
            next();
        } catch (e) {
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
        }
    );

    export { authenticate };
