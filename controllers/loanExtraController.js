const Loan = require('../models/loanModel');

// 🔍 Cari peminjaman berdasarkan status pengembalian
exports.searchByReturnStatus = (req, res) => {
  const { returned } = req.query;
  if (returned === undefined)
    return res.status(400).json({ message: "Masukkan parameter ?returned=true/false" });

  const status = returned === 'true';
  const result = Loan.getAllLoans().filter(l => l.returned === status);

  if (result.length === 0)
    return res.status(404).json({ message: "Tidak ada peminjaman dengan status tersebut" });

  res.json(result);
};

// ⏳ Cari peminjaman yang terlambat (due_date < hari ini)
exports.getLateLoans = (req, res) => {
  const today = new Date();
  const lateLoans = Loan.getAllLoans().filter(l => {
    return !l.returned && new Date(l.due_date) < today;
  });

  if (lateLoans.length === 0)
    return res.json({ message: "Tidak ada peminjaman yang terlambat" });

  res.json(lateLoans);
};

// 📄 Pagination
exports.paginateLoans = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const loans = Loan.getAllLoans();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginated = loans.slice(startIndex, endIndex);

  res.json({
    total: loans.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
};
