
const logger = require('../../bin/helper/logger');
const TradeHistory = require('../models/TradeHistory');
const ctx = 'trade-history-service';
const mongoose = require('mongoose');

async function getTradeHistoryById(userId) {
  try {
    if (!userId) {
      logger.log(ctx, `Trade history data userId is required`, 'find trade history');
      throw new Error("User ID is required.");
    }

    const tradeHistory = await TradeHistory.find({ userId });

    if (!tradeHistory || tradeHistory.length === 0) {
      logger.log(ctx, `No trade history found for userId ${userId}`, 'find trade history');
      throw new Error("Trade history not found.");
    }

    logger.log(ctx, `Trade history fetched for userId ${userId}`, 'find trade history');
    return tradeHistory;
  } catch (error) {
    logger.log(ctx, error.message, 'getTradeHistoryById');
    throw error;
  }
}

async function createTradeHistory(data) {
  try {
    const {
      userId,
      country,
      countryCode,
      entryPrice,
      marketPrice,
      status,
      time = new Date().toLocaleTimeString()
    } = data;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      logger.log(ctx, "Invalid userId format userId.", 'create trade');
      throw new Error("Invalid userId format.");
    }

    if (!country || typeof country !== 'string') {
      logger.log(ctx, "Country is required and must be a string.", 'create trade');
      throw new Error("Country is required and must be a string.");
    }

    if (!/^[A-Z]{2}$/.test(countryCode)) {
      logger.log(ctx, "Invalid countryCode. Must be 2 uppercase letters.", 'create trade');
      throw new Error("Invalid countryCode. Must be 2 uppercase letters.");
    }

    if (typeof entryPrice !== 'number' || entryPrice <= 0) {
      logger.log(ctx, "Entry price must be a positive number.", 'create trade');
      throw new Error("Entry price must be a positive number.");
    }

    if (typeof marketPrice !== 'number' || marketPrice <= 0) {
      logger.log(ctx, "Market price must be a positive number.", 'create trade');
      throw new Error("Market price must be a positive number.");
    }

    if (!['Open', 'Closed'].includes(status)) {
      logger.log(ctx, `Status must be either 'Open' or 'Closed'`, 'create trade');
      throw new Error("Status must be either 'Open' or 'Closed'.");
    }

    // formula PnL
    const pnlValue = marketPrice - entryPrice;
    const isProfit = pnlValue >= 0;
    const pnl = {
      amount: `$${Math.abs(pnlValue).toFixed(2)}`,
      percentage: ((Math.abs(pnlValue) / entryPrice) * 100).toFixed(2),
      isProfit
    };

    const newTradeHistory = new TradeHistory({
      userId,
      country,
      countryCode,
      time,
      entryPrice,
      marketPrice,
      pnl,
      status
    });

    const result = await newTradeHistory.save();

    logger.log(ctx, `Trade history created for user ${userId}`, 'create trade');
    return result;

  } catch (error) {
    logger.log(ctx, error.message, 'createTradeHistory');
    throw error;
  }
}

module.exports = {
  getTradeHistoryById,
  createTradeHistory
};