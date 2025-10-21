
import { Dice } from "./dice.js";
import { YatzyEngine } from "./yatzyEngine.js";

export class YatzyGame {
    /**
     * Initializes a new Yatzy game with player(s), round count, and score.
     * @param {string[]} players - List of players (default = ["Player 1"])
     */
    constructor(players = ["Player 1"]) {
        this.players = players;
        this.currentPlayer = this.players[0];
        this.currentRound = 1;
        this.totalScore = 0;

        // Create instances of Dice and YatzyEngine
        this.dice = new Dice();
        this.engine = new YatzyEngine();
    }

    /**
     * Starts a new game by resetting all values.
     */
    startNewGame() {
        this.currentRound = 1;
        this.totalScore = 0;
        console.log("🟢 New Yatzy game started!");
    }

    /**
     * Rolls the dice for the current player.
     * @returns {number[]} The dice values rolled.
     */
    rollDice() {
        const result = this.dice.roll();
        console.log(`🎲 ${this.currentPlayer} rolled:`, result);
        return result;
    }

    /**
     * Ends the current player's turn and prepares for the next round.
     */
    endTurn() {
        console.log(`🔄 Turn ended for ${this.currentPlayer}`);
        this.currentRound++;
    }

    /**
     * Ends the game and logs the final score.
     */
    endGame() {
        console.log("🏁 Game over! Final score:", this.totalScore);
    }
}