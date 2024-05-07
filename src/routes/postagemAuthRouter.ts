import express from "express";
import { authenticateArtista } from "../controllers/authController";
import {
  createPostagem,
  deletePostagem,
  getPostagem,
  listPostagem,
} from "../controllers/postagemControllers";

const router = express.Router();

router.post("/criarPostagem", createPostagem, authenticateArtista);
router.get("/todasPostagem", listPostagem, authenticateArtista);
router.get("/postagem/:postagemId", getPostagem, authenticateArtista);
router.delete("/deletarPostagem", deletePostagem, authenticateArtista);


export default router;
