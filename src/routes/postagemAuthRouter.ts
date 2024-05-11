import express from 'express';
import { authenticateArtista } from '../controllers/Artista/authArtistaController';
import {
  createPostagem,
  deletePostagem,
  getPostagem,
  listPostagem,
} from '../controllers/Evento/postagemControllers';

const router = express.Router();

router.post('/criarPostagem', createPostagem);
router.get('/todasPostagem', listPostagem);
router.get('/postagem/:postagemId', getPostagem);
router.delete('/deletarPostagem/:postagemId', deletePostagem);

export default router;
