import User from "../models/User";
import { Request, Response } from "express";
    

const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Por favor, forneça todos os campos necessários." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Este email já está em uso." });
        }

        const newUser = new User({
            name,
            email,
            password,
        });

        await newUser.save();

        res.status(201).json({ message: "Usuário criado com sucesso.", user: newUser });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ message: "Ocorreu um erro ao criar o usuário." });
    }
};

const getUser = async (req: Request, res: Response) =>{
    const userId = req.user?._id;
    const user = await User.findById(userId, "name email");

    if(!user){
        res.status(400);
    }

    res.status(200).json(user);
};

const listUser = async (req: Request, res: Response) => {
    try{ 
        const users = await User.find({}, 'name email');
        res.status(200).json(users);
    } catch (Error) {
    res.status(500).json(" Ocorreu um erro na listagem de usuarios")
    }
}

const deleteUser = async (req:Request, res: Response) => {
    const userId = req.user?._id;
    try {
        const user = await User.findByIdAndDelete(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
          }
          
          res.status(200).json({message: "Usuario deletado com sucesso" });
    } catch (Error) {
        res.status(500).json({ message: "Ocorreu um erro enquanto se deletava o usuario"})
    }
    
}
export { createUser, getUser, listUser, deleteUser };
