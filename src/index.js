const express = require('express');
const config = require('./config');
const tradeHistory = require('./tradeHistory');
const { startTradingBot } = require('./tradingBot');

const app = express();

app.get('/summary', (req, res) => {
    res.json(tradeHistory.getSummary());
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
    startTradingBot();
});
