const Fine = require('../models/fineModel');

// 🔹 GET semua denda
exports.getFines = (req, res) => {
  res.json(Fine.getAllFines());
};

// 🔹 GET denda by ID
exports.getFineById = (req, res) => {
  const fine = Fine.getFineById(req.params.id);
  if (!fine) return res.status(404).json({ message: "Denda tidak ditemukan" });
  res.json(fine);
};

// 🔹 POST tambah denda
exports.addFine = (req, res) => {
  const newFine = { id: Date.now(), ...req.body };
  Fine.addFine(newFine);
  res.status(201).json({ message: "Denda berhasil ditambahkan", data: newFine });
};

// 🔹 PUT update denda
exports.updateFine = (req, res) => {
  const id = req.params.id;
  const existing = Fine.getFineById(id);
  if (!existing) return res.status(404).json({ message: "Denda tidak ditemukan" });
  Fine.updateFine(id, req.body);
  res.json({ message: "Denda berhasil diperbarui" });
};

// 🔹 DELETE hapus denda
exports.deleteFine = (req, res) => {
  const id = req.params.id;
  const existing = Fine.getFineById(id);
  if (!existing) return res.status(404).json({ message: "Denda tidak ditemukan" });
  Fine.deleteFine(id);
  res.json({ message: "Denda berhasil dihapus" });
};
