const tradeHistoryService = require("../services/tradeHistoryService");

async function getByUserId(req, res) {
  try {
    userId = req.params.userId;
    const data = await tradeHistoryService.getTradeHistoryById(userId);
    res.status(200).json({ message: "success", data: data, status: true });
  } catch (err) {
    res.status(500).json({ message: "error " + err.message, data: [], status: false });
  }
}

async function store(req, res) {
  try {
    const payload = req.body;
    const data = await tradeHistoryService.createTradeHistory(payload);
    res.status(201).json({ message: "success", data: data, status: true });
  } catch (err) {
    res.status(500).json({ message: "error " + err.message, data: [], status: false });
  }
}

module.exports = {
  getByUserId,
  store
};