export class YatzyEngine {
    constructor() {
        // Initialize an empty score table for each category
        this.scoreTable = {
            Ones: 0,
            Twos: 0,
            Threes: 0,
            Fours: 0,
            Fives: 0,
            Sixes: 0,
            "Three of a Kind": 0,
            "Four of a Kind": 0,
            "Full House": 0,
            "Small Straight": 0,
            "Large Straight": 0,
            Chance: 0,
            Yatzy: 0,
        };
    }

    /**
     * Calculates the score for a given category based on dice values.
     * Placeholder for now — returns 0.
     * @param {string} category - The selected scoring category.
     * @param {number[]} diceValues - The dice values to evaluate.
     * @returns {number}
     */
    calculateScore(category, diceValues) {
        console.log(`Calculating score for ${category}`, diceValues);
        return 0; // to be implemented later
    }

    /**
     * Checks if a selection is valid for the chosen category.
     * Placeholder for now — always returns true.
     * @param {string} category - Category being validated.
     * @param {number[]} diceValues - Dice values to check.
     * @returns {boolean}
     */
    isValidSelection(category, diceValues) {
        console.log(`Validating ${category}`, diceValues);
        return true;
    }
}