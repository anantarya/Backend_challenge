class tradeHistory {
    constructor() {
        this.trades = [];
        this.balance = 10000; // Starting balance
        this.positions = 0;
    }

    recordTrade(action, price) {
        const trade = { action, price, timestamp: new Date() };
        this.trades.push(trade);
        if (action === 'buy') {
            this.positions += price;
            this.balance -= price;
        } else if (action === 'sell') {
            this.positions -= price;
            this.balance += price;
        }
    }

    getSummary() {
        const totalValue = this.balance + this.positions;
        return {
            trades: this.trades,
            balance: this.balance,
            totalValue,
            profitLoss: totalValue - 10000, // Profit/Loss from the initial balance
        };
    }
}

module.exports = new tradeHistory();
