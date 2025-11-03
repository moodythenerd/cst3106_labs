const express = require('express');
const path = require('path');
const app = express();

// 1) Serve the client folder (so index.html opens)
app.use(express.static(path.join(__dirname, '..', 'client')));

// 2) The required endpoint: /roll-dices
app.get('/roll-dices', (req, res) => {
    // Always return 5 random dice (1..6)
    const dice = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    res.json(dice);
});

// 3) Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
