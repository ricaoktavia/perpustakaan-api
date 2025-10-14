const Loan = require('../models/loanModel');

// 🔹 GET semua peminjaman
exports.getLoans = (req, res) => {
  res.json(Loan.getAllLoans());
};

// 🔹 GET peminjaman by ID
exports.getLoanById = (req, res) => {
  const loan = Loan.getLoanById(req.params.id);
  if (!loan) return res.status(404).json({ message: "Data peminjaman tidak ditemukan" });
  res.json(loan);
};

// 🔹 POST tambah peminjaman
exports.addLoan = (req, res) => {
  const newLoan = { id: Date.now(), ...req.body };
  Loan.addLoan(newLoan);
  res.status(201).json({ message: "Data peminjaman berhasil ditambahkan", data: newLoan });
};

// 🔹 PUT update peminjaman
exports.updateLoan = (req, res) => {
  const id = req.params.id;
  const existing = Loan.getLoanById(id);
  if (!existing) return res.status(404).json({ message: "Data peminjaman tidak ditemukan" });
  Loan.updateLoan(id, req.body);
  res.json({ message: "Data peminjaman berhasil diperbarui" });
};

// 🔹 DELETE hapus peminjaman
exports.deleteLoan = (req, res) => {
  const id = req.params.id;
  const existing = Loan.getLoanById(id);
  if (!existing) return res.status(404).json({ message: "Data peminjaman tidak ditemukan" });
  Loan.deleteLoan(id);
  res.json({ message: "Data peminjaman berhasil dihapus" });
};
