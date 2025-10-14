const Return = require('../models/returnModel');

// GET semua data pengembalian
exports.getReturns = (req, res) => {
  res.json(Return.getAll());
};

// GET pengembalian berdasarkan ID
exports.getReturnById = (req, res) => {
  const ret = Return.getById(req.params.id);
  if (!ret) return res.status(404).json({ message: "Data pengembalian tidak ditemukan" });
  res.json(ret);
};

// POST tambah data pengembalian
exports.addReturn = (req, res) => {
  const newReturn = { id: Date.now(), ...req.body };
  Return.add(newReturn);
  res.status(201).json({ message: "Data pengembalian berhasil ditambahkan", data: newReturn });
};

// PUT update data pengembalian
exports.updateReturn = (req, res) => {
  const id = req.params.id;
  const existing = Return.getById(id);
  if (!existing) return res.status(404).json({ message: "Data pengembalian tidak ditemukan" });
  Return.update(id, req.body);
  res.json({ message: "Data pengembalian berhasil diperbarui" });
};

// DELETE hapus data pengembalian
exports.deleteReturn = (req, res) => {
  const id = req.params.id;
  const existing = Return.getById(id);
  if (!existing) return res.status(404).json({ message: "Data pengembalian tidak ditemukan" });
  Return.remove(id);
  res.json({ message: "Data pengembalian berhasil dihapus" });
};
