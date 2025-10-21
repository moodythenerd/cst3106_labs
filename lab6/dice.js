export class Dice {
    /**
     * Initializes a new Dice set.
     * @param {number} numDice - Number of dice in the game (default = 5).
     */
    constructor(numDice = 5) {
        this.numDice = numDice;
        // Start all dice at value 1
        this.values = Array(this.numDice).fill(1);
    }

    /**
     * Rolls all dice and updates their values randomly between 1–6.
     * @returns {number[]} The new dice values.
     */
    roll() {
        this.values = this.values.map(() => Math.floor(Math.random() * 6) + 1);
        return this.values;
    }

    /**
     * Gets the current dice values.
     * @returns {number[]} The current dice values.
     */
    getValues() {
        return this.values;
    }
}