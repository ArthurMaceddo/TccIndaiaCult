import express from "express";
import {
  authenticateArtista,
  logoutArtista,
} from "../controllers/Artista/authArtistaController";
import {
  deleteArtista,
  listArtista,
} from "../controllers/Artista/artistaControllers";

const router = express.Router();

router.get("/registrar", authenticateArtista);
router.get("/logout", logoutArtista);
router.get("/todosArtistas", listArtista);
router.delete("/deleteArtista/:artistaId", deleteArtista);

export default router;
