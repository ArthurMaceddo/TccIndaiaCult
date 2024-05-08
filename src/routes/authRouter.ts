import express from "express";
import {
  registerArtista,
  authenticateArtista,
  logoutArtista,
} from "../controllers/authController";
import { getArtista, listArtista } from "../controllers/artistaControllers";
import { createPostagem } from "../controllers/postagemControllers";
import { authenticate } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/registrar", registerArtista);
router.get("/registrar", authenticateArtista);
router.post("/login", authenticateArtista);
router.post("/logout", logoutArtista);
router.get("/allartistas", listArtista);

router.post("/criarPostagem", authenticate, createPostagem );



export default router;
