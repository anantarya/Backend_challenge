const { getStockPrice } = require('./api');
const tradeHistory = require('./tradeHistory');

let lastPrice = null;

const tradingStrategy = async () => {
    const { price } = await getStockPrice();
    const currentPrice = parseFloat(price);
    console.log(`Current Price: $${currentPrice}`);

    if (lastPrice !== null) {
        const priceChange = ((currentPrice - lastPrice) / lastPrice) * 100;

        // Trading logic
        if (priceChange <= -2) {
            console.log('Buying...');
            tradeHistory.recordTrade('buy', currentPrice);
        } else if (priceChange >= 3) {
            console.log('Selling...');
            tradeHistory.recordTrade('sell', currentPrice);
        }
    }

    lastPrice = currentPrice;
};

const startTradingBot = () => {
    setInterval(tradingStrategy, 5000); // Check every 5 seconds
};

module.exports = { startTradingBot };
