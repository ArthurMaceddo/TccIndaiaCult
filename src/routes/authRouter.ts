import express from 'express';
import {
  registerArtista,
  authenticateArtista,
  logoutArtista,
} from '../controllers/authController';
import {
  deleteArtista,
  getArtista,
  listArtista,
} from '../controllers/artistaControllers';

const router = express.Router();

router.get('/registrar', authenticateArtista);
router.post('/logout', logoutArtista);
router.delete('/deleteArtista/:artistaId', deleteArtista);

router.get('/allartistas', listArtista);

export default router;
