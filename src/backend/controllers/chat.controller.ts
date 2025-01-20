import { Request, Response } from 'express';
import { Chat } from '../models/chat.model';

export const createChat = async (req: Request, res: Response): Promise<void> => {
  const chat = new Chat(req.body);
  const savedChat = await chat.save();
  res.status(201).json(savedChat);
};

export const getChat = async (req: Request, res: Response): Promise<void> => {
  const chat = await Chat.findById(req.params.id);
  if (!chat) {
    res.status(404).json({ message: 'Chat not found' });
    return;
  }
  res.json(chat);
};