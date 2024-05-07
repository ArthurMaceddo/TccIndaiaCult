import express from "express";
import { getArtista, listArtista } from "../controllers/artistaControllers";

const router = express.Router();

router.get("/:id", getArtista);


export default router;
