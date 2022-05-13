import { TicTacToeGame } from "./ticTacToeGame.ts";

function main(): void {
  const game = new TicTacToeGame();

  // Game logic here.

  console.info(game.drawGame());
}

main();
