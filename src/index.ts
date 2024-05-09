import express, { Router } from 'express';
import authRouter from './routes/authRouter';
import connectUserDB from './connections/userDB';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter';
import { authenticate } from './middleware/authMiddleware';
import { errorHandler } from './middleware/errorMiddleware';
import postagemRouter from './routes/postagemAuthRouter';
import { appendFile } from 'fs';
import { authenticateArtista } from './controllers/authController';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/artistas', authenticate, authRouter);
app.post('/registrar', authenticateArtista);
app.post('/login', authenticateArtista);

app.use('/postagem', authenticate, postagemRouter);

app.use(errorHandler);

connectUserDB();
