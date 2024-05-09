import Usuario from "../models/Usuario";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Por favor, forneça todos os campos necessários." });
    }

    const existingUser = await Usuario.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Este email já esta em uso" });
    }

    const newUsuario = new Usuario({
      name,
      email,
      password,
    });

    await newUsuario.save();

    res
      .status(201)
      .json({ message: "Usuario criado com sucesso", user: newUsuario });
  } catch (error) {
    console.error("Erro ao criar Usuario", error);
    res.status(500).json({ message: "Ocorreu um erro ao criar o Usuario" });
  }
};

const getUsuario = async (req: Request, res: Response) => {
  const usuarioId = req.params;
};
