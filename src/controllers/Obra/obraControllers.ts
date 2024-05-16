import { Request, Response } from 'express';
import Obra, { IObra } from '../../models/Obra';

const createObra = async (req: Request, res: Response) => {
  try {
    const {
      titulo,
      descricao,
      genero,
      autor,
      qtdAvaliacoes,
      avaliacoes,
      data,
      imagem,
    } = req.body;

    if (!titulo || !imagem || !data || !descricao || !genero || !autor) {
      return res
        .status(400)
        .json({ message: 'Por favor, forneça todos os campos necessários' });
    }

    // Verifica se artista._id está presente na requisição

    const novaObra: IObra = new Obra({
      titulo,
      descricao,
      genero,
      autor,
      qtdAvaliacoes,
      avaliacoes,
      data,
      imagem,
    });

    await novaObra.save(); // Adicionei o await aqui para aguardar a conclusão da operação de salvamento

    res.status(201).json({
      message: 'Obra criada com sucesso.',
      obra: novaObra,
    });
  } catch (error) {
    console.error('Erro ao criar obra:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao criar a obra.' });
  }
};

const getObra = async (req: Request, res: Response) => {
  const { obraId } = req.params;
  const obra = await Obra.findById(obraId, 'nome data descricao autor');

  if (!obra) {
    return res.status(404).json({ message: 'Obra não encontrada' });
  }

  res.status(200).json(obra);
};

const listObra = async (req: Request, res: Response) => {
  try {
    const obra = await Obra.find({}, 'nome data descricao autor');
    res.status(200).json(obra);
  } catch (Error) {
    res.status(500).json('Ocorreu um erro na listagem de obras.');
  }
};

const deleteObra = async (req: Request, res: Response) => {
  const { obraId } = req.params;
  try {
    const obra = await Obra.findByIdAndDelete(obraId);

    if (!obra) {
      return res.status(404).json({ message: 'Obra não encontrada' });
    }

    res.status(200).json({ message: 'Obra deletada com sucesso' });
  } catch (Error) {
    res.status(500).json({
      message: 'Ocorreu um erro enquanto se deleveta a Obra, tente novamente.',
    });
  }
};

export { createObra, listObra, getObra, deleteObra };
