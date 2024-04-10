    import { Request, Response, NextFunction } from "express";
    import jwt, { JwtPayload } from "jsonwebtoken";
    import User from "../models/User";
    import asyncHandler from "express-async-handler";

    const authenticate = asyncHandler(
        async (req: Request, res: Response, next: NextFunction) =>{
            try{
                let token = req.cookies.jwt;

                if(!token) {
                    res.status(401);
                    throw new Error("Não autorizado, token não encontrado");
                }

                const jwtSecret = process.env.JWT_SECRET || "";
                const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

                if (!decoded || !decoded.userId) {
                    res.status(401);
                    throw new Error("Não autorizado, userId não encontrado");
            }

            const user = await User.findById(decoded.userId, "_id name email" );

            if (!user) {
                res.status(401);
                throw new Error("Não autorizado, token invaliado")
            }

            req.user = user;
            next();
        } catch (e) {
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
        }
    );

    export { authenticate };
