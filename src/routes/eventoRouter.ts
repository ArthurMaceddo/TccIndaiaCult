import express from "express";
import { getEvento } from "../controllers/Evento/postagemControllers";

const router = express.Router();

router.get("/:id", getEvento);

export default router;
