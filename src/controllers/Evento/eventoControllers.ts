import { Request, Response } from 'express';
import { authenticate } from '../../middleware/authMiddleware';
import Evento, { IEvento } from '../../models/Evento';

const createEvento = async (req: Request, res: Response) => {
  try {
    const {
      Titulo,
      Categoria,
      DescricaoEvento,
      Data,
      image,
      artista,
      artistaImagem,
      Cep,
      Pais,
      Estado,
      Cidade,
      TipoBairro,
      Bairro,
      TipoRua,
      Rua,
      Numero,
      Complemento,
    } = req.body;

    if (
      !Titulo ||
      !Categoria ||
      !DescricaoEvento ||
      !Data ||
      !image ||
      !artista ||
      !artistaImagem ||
      !Cep ||
      !Pais ||
      !Estado ||
      !Cidade ||
      !TipoBairro ||
      !Bairro ||
      !TipoRua ||
      !Rua ||
      !Numero ||
      !Complemento
    ) {
      return res
        .status(400)
        .json({ message: 'Por favor, forneça todos os campos necessários' });
    }

    const novoEvento: IEvento = new Evento({
      Titulo,
      Categoria,
      DescricaoEvento,
      Data,
      image,
      artista,
      artistaImagem,
      Cep,
      Pais,
      Estado,
      Cidade,
      TipoBairro,
      Bairro,
      TipoRua,
      Rua,
      Numero,
      Complemento,
    });

    await novoEvento.save();

    res.status(201).json({
      message: 'Evento criado com sucesso.',
      evento: novoEvento,
    });
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao criar o evento.' });
  }
};

const getEvento = async (req: Request, res: Response) => {
  const { eventoId } = req.params;
  const evento = await Evento.findById(
    eventoId,
    'Titulo DescricaoEvento artista'
  );

  if (!evento) {
    return res.status(404).json({ message: 'Evento não encontrado' });
  }

  res.status(200).json(evento);
};

const listEvento = async (req: Request, res: Response) => {
  try {
    const eventos = await Evento.find({}, 'Titulo DescricaoEvento artista');
    res.status(200).json(eventos);
  } catch (Error) {
    res.status(500).json('Ocorreu um erro na listagem de eventos.');
  }
};

const deleteEvento = async (req: Request, res: Response) => {
  const { eventoId } = req.params;
  try {
    const evento = await Evento.findByIdAndDelete(eventoId);

    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    res.status(200).json({ message: 'Evento deletado com sucesso' });
  } catch (Error) {
    res.status(500).json({
      message:
        'Ocorreu um erro enquanto se deletava o evento, tente novamente.',
    });
  }
};

const updateEvento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { evento } = req.body;

  try {
    await Evento.findByIdAndUpdate(id, evento);
    res.status(200).end();
  } catch (Error) {
    res.status(500).json({
      message: 'Ocorreu um erro na atualização do Evento, tente novamente',
    });
  }
};

export { createEvento, listEvento, getEvento, deleteEvento, updateEvento };
