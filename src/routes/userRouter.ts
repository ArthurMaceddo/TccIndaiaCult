import express from 'express';
import { getArtista, listArtista } from '../controllers/artistaControllers';
import { logoutUsuario } from '../controllers/Usuario/authUsuarioController';
import { listUsuario, deleteUser } from '../controllers/Usuario/userController';
import { createUser } from '../controllers/Usuario/usuarioControllers';

const router = express.Router();

router.get('/:id', getArtista);

router.post('/registrarUsuario', createUser);
router.post('/logoutUsuario', logoutUsuario);
router.get('/todosUsuarios', listUsuario);
router.delete('/deletaUsuario/:usuarioId', deleteUser);

export default router;
