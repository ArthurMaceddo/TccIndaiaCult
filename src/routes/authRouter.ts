import express from "express";
import {
  registerArtista,
  authenticateArtista,
  logoutArtista,
} from "../controllers/authController";

const router = express.Router();

router.post("/registrar", registerArtista);
router.get("/registrar",   authenticateArtista,);
router.post("/login", authenticateArtista);
router.post("/logout", logoutArtista);

export default router;