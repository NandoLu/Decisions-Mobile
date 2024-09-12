// GameLogic.js
export const initialState = {
  economy: 100, // 100 M
  popularity: 90, // 51%
  year: 1940,
  month: 0, // Janeiro
  turn: 0,
  maxTurns: 48,
  revenue: 0, // Nova variável de receita
  powerPoints: 10, // Saldo inicial de pontos de poder
  gameOver: false, // Novo estado para indicar fim de jogo
  gameOverMessage: '', // Mensagem de fim de jogo
};

export const advanceTurn = (state) => {
  let { year, month, turn, maxTurns, popularity, revenue, economy, powerPoints } = state;

  console.log('State before advancing turn:', state);
  
  month += 1;
  if (month > 11) {
    month = 0;
    year += 1;
  }

  turn += 1;

  // Atualizar economia com a receita
  economy += revenue;

  // Calcular ganho de pontos de poder baseado na popularidade
  let powerGain = 1;
  if (popularity > 75) {
    powerGain = 3;
  } else if (popularity > 30) {
    powerGain = 2;
  }
  
  powerPoints += powerGain;

  if (powerPoints >= 40){
    powerPoints = 40;
  }

  if (turn >= maxTurns) {
    if (popularity > 50) {
      maxTurns += 48; // Ganhou a eleição
      return { ...state, year, month, turn, maxTurns, economy, revenue, powerPoints, gameOver: true, gameOverMessage: `Parabéns, você ganhou a eleição com: ${popularity}% de popularidade` };
    } else {
      return { ...state, gameOver: true, gameOverMessage: 'Você perdeu a eleição. Fim de jogo.' }; // Perdeu a eleição
    }
  }

  return { ...state, year, month, turn, maxTurns, economy, revenue, powerPoints }; // Resetar receita após atualizar economia
};
