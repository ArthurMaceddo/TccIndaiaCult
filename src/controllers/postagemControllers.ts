import { Request, Response } from "express"
import Postagem, { IPostagem } from "../models/Postagem";


const createPostagem = async(req:Request, res: Response) => {
    try {
        const { title, description } = req.body;

        if(!title || !description) {
            return res.status(400).json({ message: "Por favor, forneça todos os campos necessarios"})
        }

    const novaPostagem: IPostagem = new Postagem({
        title,
        description,
      });
  
      await novaPostagem.save();
  
      res.status(201).json({ message: "Postagem criada com sucesso.", postagem: novaPostagem });
    } catch (error) {
      console.error("Erro ao criar postagem:", error);
      res.status(500).json({ message: "Ocorreu um erro ao criar a postagem." });
    }

 const getPostagem = async ( req: Request, res: Response) => {
        const postagemId = req.postagem?._id;
        const postagem = await Postagem.findById(postagemId, "tittle description");

            if(!postagem){
            res.status(400);
        }

            res.status(200).json(postagem);
        }
};

    const listPostagem = async( req: Request, res: Response) => {
        try{
            const postagens = await Postagem.find({}, "title description");
            res.status(200).json(postagens);
        } catch ( Error){
            res.status(500).json("Ocorreu um erro na listagem de postagens.")
        }
    }

    const deletePostagem = async (req: Request, res: Response) => {
        const postagemId = req.postagem?._id;
        try{
            const postagem = await Postagem.findByIdAndDelete(postagemId)

            if(!postagem) {
                return res.status(404).json( {message : "Postagem não encontrada"});
            }

            res.status(200).json( {message: "Postagem deletada com sucesso"});
        } catch( Error){
            res.status(500).json({ message: "Ocorreu um erro enquanto se deleveta a postagem, tente novamente."})
        }
    }

  export { createPostagem, listPostagem, deletePostagem}
