import express from 'express';
import { authenticateArtista } from '../controllers/authArtistaController';
import {
  createPostagem,
  deletePostagem,
  getPostagem,
  listPostagem,
} from '../controllers/postagemControllers';

const router = express.Router();

router.post('/criarPostagem', createPostagem);
router.get('/todasPostagem', listPostagem);
router.get('/postagem/:postagemId', getPostagem);
router.delete('/deletarPostagem/:postagemId', deletePostagem);

export default router;
