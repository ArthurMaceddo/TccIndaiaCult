import Usuario from '../../models/Usuario';
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Por favor, forneça todos os campos necessários.' });
    }

    const existingUser = await Usuario.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Este email já esta em uso' });
    }

    const newUsuario = new Usuario({
      name,
      email,
      password,
    });

    await newUsuario.save();

    res
      .status(201)
      .json({ message: 'Usuario criado com sucesso', user: newUsuario });
  } catch (error) {
    console.error('Erro ao criar Usuario', error);
    res.status(500).json({ message: 'Ocorreu um erro ao criar o Usuario' });
  }
};

const getUsuario = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  const usuario = await Usuario.findById(usuarioId, 'name email');

  if (!usuario) {
    res.status(400).json({ message: 'Usuario não encontrado' });
  }

  res.status(200).json(usuario);
};

const listUsuario = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.find({}, 'name email');
    res.status(200).json(usuarios);
  } catch (Error) {
    res.status(500).json('Ocorreu um erro na listagem de artistas');
  }
};

const deleteUsuario = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  try {
    const usuario = await Usuario.findByIdAndDelete(usuarioId);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }

    res.status(200).json({ message: 'Usuario deletado com sucesso' });
  } catch (Error) {
    res
      .status(500)
      .json({ message: 'Ocorreu um erro enquanto se deletava o Usuario' });
  }
};

export { createUser, listUsuario, getUsuario, deleteUsuario };
