import express from 'express';
import {
  authenticateArtista,
  logoutArtista,
} from '../controllers/Artista/authArtistaController';
import {
  deleteArtista,
  listArtista,
  updateArtista,
} from '../controllers/Artista/artistaControllers';

const router = express.Router();

router.get('/registrar', authenticateArtista);
router.post('/logout', logoutArtista);
router.delete('/deleteArtista/:artistaId', deleteArtista);
router.patch('/atualizaArtista/:id', updateArtista);

export default router;
