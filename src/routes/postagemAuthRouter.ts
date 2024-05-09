import express from 'express';
import { authenticateArtista } from '../controllers/authController';
import {
  createPostagem,
  deletePostagem,
  getPostagem,
  listPostagem,
} from '../controllers/postagemControllers';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/criarPostagem', createPostagem);
router.get('/todasPostagem', listPostagem);
router.get('/postagem/:postagemId', getPostagem);
router.delete('/deletarPostagem/:postagemId', deletePostagem);

export default router;
