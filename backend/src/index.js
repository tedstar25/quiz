const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT ;

let gameState = {
  numberOfQuestion: 2,
  category: { id: 0, name: '' },
  level: '',
  type: '',
  status: '',
  score: 0,
};

app.use(express.json());

app.get('/getGamestate', (req, res) => {
  console.log('GET request received for game state');
  res.status(200).json(gameState);
});

app.put('/getGamestate', (req, res) => {
  console.log('PUT request received for game state');
  const newGameState = req.body;
  gameState = { ...newGameState };
  res.status(200).json({ message: 'Game state updated successfully', gameState });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
