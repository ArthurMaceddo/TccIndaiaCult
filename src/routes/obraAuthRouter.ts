import express from "express";
import {
  createObra,
  deleteObra,
  getObra,
  listObra,
} from "../controllers/Obra/obraControllers";
import { authenticateArtista } from "../controllers/Artista/authArtistaController";

const router = express.Router();

router.post("/criarObra", createObra);
router.get("/todasObras", listObra);
router.get("/obra/:obrasId", getObra);
router.patch("/atualizarObra/:obraId");
router.delete("/deletarObra", deleteObra);

export default router;
