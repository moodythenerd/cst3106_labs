const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
    host: "127.0.0.1",
    port: 3000,  // YOUR POSTGRES PORT
    user: "postgres",
    password: "Yousef20",
    database: "emergency_waitlist"
});

// Route
app.get("/patients", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM patients ORDER BY attention_score DESC"
        );
        res.json(result.rows);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Server error");
    }
});

// Start Express on a DIFFERENT PORT than Postgres
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
