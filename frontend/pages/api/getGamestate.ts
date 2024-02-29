import { NextApiRequest, NextApiResponse } from 'next';

const initialState = {
  numberOfQuestion: 2,
  category: { id: 0, name: '' },
  level: '',
  type: '',
  status: '',
  score: 0,
};

let gameState = { ...initialState };

export default function handler(req: NextApiRequest, res: NextApiResponse) {


  console.log(gameState)

  



  try {
    if (req.method === 'GET') {
      return res.status(200).json(gameState);
    }

    if (req.method === 'PUT') {
      const newGameState = req.body;
      gameState = { ...newGameState };
      return res.status(200).json({ message: 'Game state updated successfully', gameState });
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}