const Fine = require('../models/fineModel');

// 🔎 Cari denda berdasarkan status pembayaran
exports.searchByStatus = (req, res) => {
  const { paid } = req.query;
  if (paid === undefined) {
    return res.status(400).json({ message: "Masukkan parameter ?paid=true/false" });
  }

  const status = paid === 'true';
  const result = Fine.getAllFines().filter(f => f.paid === status);

  if (result.length === 0) {
    return res.status(404).json({ message: "Tidak ada denda dengan status tersebut" });
  }

  res.json(result);
};

// 💰 Hitung total semua denda yang belum dibayar
exports.totalUnpaid = (req, res) => {
  const fines = Fine.getAllFines();
  const total = fines
    .filter(f => !f.paid)
    .reduce((sum, f) => sum + f.amount, 0);

  res.json({ total_unpaid: total });
};

// 📄 Pagination denda
exports.paginateFines = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const fines = Fine.getAllFines();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginated = fines.slice(startIndex, endIndex);

  res.json({
    total: fines.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
};
