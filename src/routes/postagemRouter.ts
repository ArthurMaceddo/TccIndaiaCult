import express from "express";
import {
  createPostagem,
  deletePostagem,
  getPostagem,
  listPostagem,
} from "../controllers/postagemControllers";

const router = express.Router();

router.post("/criarPostagem", createPostagem);
router.get("/todasPostagem", listPostagem);
router.get("/postagem", getPostagem);
router.delete("/deletarPostagem", deletePostagem);
