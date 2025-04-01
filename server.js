require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/env-config', (req, res) => {
    res.json({
        GROQ_API_KEY: process.env.GROQ_API_KEY,
        PEXELS_API_KEY: process.env.PEXELS_API_KEY
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
