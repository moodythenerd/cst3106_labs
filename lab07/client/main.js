import { YatzyGame } from "./yatzyGame.js";

const game = new YatzyGame();
const diceContainer = document.getElementById("dice-container");
const rollInfo = document.getElementById("roll-info");
const btnRoll = document.getElementById("btn-roll");
const btnEnd = document.getElementById("btn-end");
const btnNew = document.getElementById("btn-new");
const scoreBody = document.getElementById("score-body");
const totalCell = document.getElementById("total");

const DICE_SYMBOLS = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// Draw dice faces
function renderDice(vals) {
    diceContainer.innerHTML = "";
    vals.forEach((v, i) => {
        const d = document.createElement("div");
        d.className = "die";
        if (game.dice.held[i]) d.classList.add("held");
        d.textContent = DICE_SYMBOLS[v - 1];
        d.addEventListener("click", () => {
            game.dice.toggleHold(i);
            renderDice(game.dice.getValues());
        });
        diceContainer.appendChild(d);
    });
}

function renderRollsLeft() {
    rollInfo.textContent = `Rolls left: ${game.rollsLeft}`;
}

function renderScoreboard() {
    scoreBody.innerHTML = "";
    for (const cat in game.engine.categories) {
        const row = document.createElement("tr");
        const catCell = document.createElement("td");
        catCell.textContent = cat;
        const valCell = document.createElement("td");
        valCell.textContent = game.engine.categories[cat];
        row.append(catCell, valCell);
        row.addEventListener("click", () => {
            if (game.engine.categories[cat] === 0) {
                const pts = game.score(cat);
                valCell.textContent = pts;
                totalCell.textContent = game.total;
                game.endTurn();
                renderDice(game.dice.getValues());
                renderRollsLeft();
            }
        });
        scoreBody.appendChild(row);
    }
}

// 🔹 Updated async Roll handler
btnRoll.addEventListener("click", async () => {
    const vals = await game.roll(); // wait for server dice
    renderDice(vals);
    renderRollsLeft();

    if (game.rollsLeft === 0) {
        setTimeout(() => {
            alert("No rolls left! Starting a new turn...");
            game.endTurn();
            renderDice(game.dice.getValues());
            renderRollsLeft();
        }, 500);
    }
});

// End turn button
btnEnd.addEventListener("click", async () => {
    game.endTurn();
    const vals = await game.roll();
    renderDice(vals);
    renderRollsLeft();
});

// New game button
btnNew.addEventListener("click", () => location.reload());

// Initial render
renderDice(game.dice.getValues());
renderRollsLeft();
renderScoreboard();
