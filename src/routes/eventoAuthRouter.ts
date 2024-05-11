import express from "express";
import { authenticateArtista } from "../controllers/Artista/authArtistaController";
import {
  createEvento,
  listEvento,
  getEvento,
  deleteEvento,
} from "../controllers/Evento/postagemControllers";

const router = express.Router();

router.post("/criarEvento", createEvento);
router.get("/todosEventos", listEvento);
router.get("/evento/:eventoId", getEvento);
router.delete("/deletarEvento/:eventoId", deleteEvento);

export default router;
