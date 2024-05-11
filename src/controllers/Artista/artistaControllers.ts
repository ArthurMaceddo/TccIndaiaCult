import { Request, Response } from "express";
import Artista from "../../models/Artista";
import { ArtistaBasicInfo } from "../../types/artistaTypes";

const createArtista = async (req: Request, res: Response) => {
  try {
    const { name, email, password, genre, description, image, banner } =
      req.body;

    if (
      !name ||
      !email ||
      !password ||
      !genre ||
      !description ||
      !image ||
      !banner
    ) {
      return res
        .status(400)
        .json({ message: "Por favor, forneça todos os campos necessários." });
    }

    const existingArtista = await Artista.findOne({ email });
    if (existingArtista) {
      return res.status(400).json({ message: "Este email já está em uso." });
    }

    const newArtista = new Artista({
      name,
      email,
      password,
      genre,
      description,
      image,
      banner,
    });

    await newArtista.save();

    res
      .status(201)
      .json({ message: "Artista criado com sucesso.", user: newArtista });
  } catch (error) {
    console.error("Erro ao criar Artista:", error);
    res.status(500).json({ message: "Ocorreu um erro ao criar o Artista." });
  }
};

const getArtista = async (req: Request, res: Response) => {
  const { artistaId } = req.params;
  const artista = await Artista.findById(artistaId, "name email");

  if (!artista) {
    res.status(400).json({ message: "Artista não encotrado" });
  }

  res.status(200).json(artista);
};

const listArtista = async (req: Request, res: Response) => {
  try {
    const artistas = await Artista.find({}, "name email");
    res.status(200).json(artistas);
  } catch (Error) {
    res.status(500).json(" Ocorreu um erro na listagem de artistas");
  }
};

const deleteArtista = async (req: Request, res: Response) => {
  const { artistaId } = req.params;
  try {
    const artista = await Artista.findByIdAndDelete(artistaId);

    if (!artista) {
      return res.status(404).json({ message: "Artista não encontrado." });
    }

    res.status(200).json({ message: "Artista deletado com sucesso" });
  } catch (Error) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro enquanto se deletava o Artista" });
  }
};

export { createArtista, getArtista, listArtista, deleteArtista };
