import { Request, Response } from "express";
import Artista from "../models/Artista";
import { generateToken, clearToken } from "../utils/auth";

const registerArtista = async (req: Request, res: Response) => {
  const { name, email, password, genre, description, image, banner, } = req.body;
  const artistaExists = await Artista.findOne({ email });

  if (artistaExists) {
    return res.status(400).json({ message: "Artista já existente" });
  }

  const artista = await Artista.create({
    name,
    email,
    password,
    genre, 
    description, 
    image, 
    banner,
  });

  if (artista) {
    generateToken(res, artista._id);
    res.status(201).json({
      id: artista._id,
      name: artista.name,
      email: artista.email,
      genre: artista.genre,
      description: artista.description, 
      image: artista.image,
      banner: artista.banner
    });
  } else {
    res.status(400).json({ message: "Aconteceu um erro durando a criação deste Artista" });
  }
};


const authenticateArtista = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const artista = await Artista.findOne({ email });

  if (artista && (await artista.comparePassword(password))) {
    generateToken(res, artista._id);
    res.status(201).json({
      id: artista._id,
      name: artista.name,
      email: artista.email,
      genre: artista.genre,
      description: artista.description, 
      image: artista.image,
      banner: artista.banner
    });
  } else {
    res.status(401).json({ message: "Artista não encontrado / password incorrect" });
  }
};

const logoutArtista = (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: "Artista se desconectou" });
};

export { registerArtista, authenticateArtista, logoutArtista };