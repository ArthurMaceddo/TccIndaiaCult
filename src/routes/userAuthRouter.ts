import express from 'express';
import { logoutUsuario } from '../controllers/Usuario/authUsuarioController';
import { deleteUser, listUsuario } from '../controllers/Usuario/userController';
import { createUser } from '../controllers/Usuario/usuarioControllers';

const router = express.Router();

router.post('/registrarUsuario', createUser);
router.post('/logoutUsuario', logoutUsuario);
router.get('/todosUsuarios', listUsuario);
router.delete('/deletaUsuario/:usuarioId', deleteUser);

export default router;
