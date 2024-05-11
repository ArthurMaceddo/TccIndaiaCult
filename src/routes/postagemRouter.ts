import express from 'express';
import { getPostagem } from '../controllers/Evento/postagemControllers';

const router = express.Router();

router.get('/:id', getPostagem);

export default router;
