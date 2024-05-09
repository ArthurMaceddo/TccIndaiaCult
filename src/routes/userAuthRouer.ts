import express from "express";

const router = express.Router();

router.post("/registrarUsuario");
router.post("/logoutUsuario");
router.get("/todosUsuarios");
router.delete("/deletaUsuario/:usuarioId");
