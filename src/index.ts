import express from "express";
import authRouter from "./routes/authRouter";
import connectUserDB from "./connections/userDB";
import dotenv from "dotenv";
import bodyParser, { BodyParser } from "body-parser";
import cors from "cors";
import mongoose from "mongoose";


const app = express();




dotenv.config();

connectUserDB();



app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
    
  
  const port = process.env.PORT || 3000;

  mongoose.connect('mongodb+srv://bruno35418:Indaiacult@2024@indaiacult.hdajmzg.mongodb.net/')
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
  
  // Definindo um schema
  const exemploSchema = new mongoose.Schema({
    nome: String,
    idade: Number
  });
  
  // Definindo um modelo
  const Exemplo = mongoose.model('Exemplo', exemploSchema);
  
  // Rota para inserção de dados
  app.get('/inserir', async (req, res) => {
    try {
      // Criando um novo objeto Exemplo
      const novoExemplo = new Exemplo({ nome: 'Fulano', idade: 30 });
      
      // Salvando no banco de dados
      await novoExemplo.save();
      
      res.send('Dados inseridos com sucesso!');
    } catch (error) {
      res.status(500).send('Erro ao inserir dados: ' + error);
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use(authRouter);