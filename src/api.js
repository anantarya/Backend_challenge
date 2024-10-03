const axios = require('axios');

const mockStockPrices = () => {
    // Generate a random stock price between 90 and 110
    return (Math.random() * 20 + 90).toFixed(2);
};

const getStockPrice = () => {
    return new Promise((resolve) => {
        // Mocking API response with random stock price
        setTimeout(() => {
            resolve({ price: mockStockPrices() });
        }, 1000);
    });
};

module.exports = { getStockPrice };
