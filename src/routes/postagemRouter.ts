import express from "express";
import { getPostagem } from "../controllers/postagemControllers";

const router = express.Router();

router.get("/:id", getPostagem)


export default router;
