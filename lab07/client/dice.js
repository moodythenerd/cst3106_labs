export class Dice {
    constructor(numDice = 5) {
        this.numDice = numDice;
        this.values = Array(numDice).fill(1);
        this.held = Array(numDice).fill(false);
    }

    // 🔹 Fetch dice values from the server instead of rolling locally
    async roll() {
        try {
            // Ask the Express server for dice values
            const response = await fetch('/roll-dices');
            if (!response.ok) throw new Error(`Server error: ${response.status}`);

            // Expect an array like [3, 5, 1, 6, 2]
            const newValues = await response.json();

            // Only replace dice that aren’t held
            this.values = this.values.map((v, i) =>
                this.held[i] ? v : newValues[i]
            );

            return this.values;
        } catch (error) {
            console.error('❌ Error fetching dice values from server:', error);
            alert('Could not roll dice — make sure the server is running.');
            return this.values; // fallback to existing values
        }
    }

    toggleHold(i) {
        this.held[i] = !this.held[i];
    }

    resetHolds() {
        this.held = Array(this.numDice).fill(false);
    }

    getValues() {
        return this.values;
    }
}
