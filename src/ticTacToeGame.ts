import { Player } from "./player.ts";

export class TicTacToeGame {
  /**
   * Start the game with a 3x3 grid.
   */
  constructor(firstPlayer: Player = Player.X) {}

  /**
   * Returns a string to display the game board.
   */
  drawGame(): string {
    return "";
  }

  /**
   * Returns true if the position is currently marked.
   */
  isPositionMarked(x: number, y: number): boolean {
    return false;
  }

  /**
   * Sets the current player's symbol in the given position.
   */
  markPosition(x: number, y: number): void {}

  /**
   * Returns true if the game has come to an end.
   */
  gameIsOver(): boolean {
    return false;
  }

  /**
   * Returns the player that has won the game or null if the
   * game has not yet been won.
   */
  gameIsWon(): Player | null {
    return null;
  }
}
