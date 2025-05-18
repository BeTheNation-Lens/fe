const mongoose = require("mongoose");

const PnLSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
    default: "0.00"
  },
  percentage: {
    type: String,
    required: true,
    default: "0.0"
  },
  isProfit: {
    type: Boolean,
    required: true,
    default: false
  }
}, { _id: false });

const tradeHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  countryCode: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  entryPrice: {
    type: Number,
    required: true
  },
  marketPrice: {
    type: Number,
    required: true
  },
  pnl: {
    type: PnLSchema,
    required: true
  },
  status: {
    type: String,
    enum: ["Open", "Closed"],
    default: "Open"
  }
}, {
  timestamps: true
});



module.exports = mongoose.model("TradeHistory", tradeHistorySchema);