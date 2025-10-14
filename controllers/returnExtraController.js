const Return = require('../models/returnModel');

// 🔎 Cari data pengembalian berdasarkan loan_id
exports.getByLoanId = (req, res) => {
  const { loan_id } = req.params;
  const result = Return.getAll().filter(r => r.loan_id == loan_id);
  res.json(result);
};

// 📆 Cari data pengembalian berdasarkan tanggal
exports.getByDate = (req, res) => {
  const { date } = req.params;
  const result = Return.getAll().filter(r => r.return_date === date);
  res.json(result);
};

// 📊 Hitung total pengembalian yang memiliki denda
exports.getTotalWithFine = (req, res) => {
  const result = Return.getAll().filter(r => r.fine_id !== null);
  res.json({ totalWithFine: result.length });
};
