const Rack = require('../models/rackModel');

// GET semua rak
exports.getRacks = (req, res) => {
  res.json(Rack.getAll());
};

// GET satu rak berdasarkan ID
exports.getRackById = (req, res) => {
  const rack = Rack.getById(req.params.id);
  if (!rack) return res.status(404).json({ message: "Rak tidak ditemukan" });
  res.json(rack);
};

// POST tambah rak
exports.addRack = (req, res) => {
  const newRack = { id: Date.now(), ...req.body };
  Rack.add(newRack);
  res.status(201).json({ message: "Rak berhasil ditambahkan", data: newRack });
};

// PUT update rak
exports.updateRack = (req, res) => {
  const id = req.params.id;
  const existing = Rack.getById(id);
  if (!existing) return res.status(404).json({ message: "Rak tidak ditemukan" });
  Rack.update(id, req.body);
  res.json({ message: "Rak berhasil diperbarui" });
};

// DELETE hapus rak
exports.deleteRack = (req, res) => {
  const id = req.params.id;
  const existing = Rack.getById(id);
  if (!existing) return res.status(404).json({ message: "Rak tidak ditemukan" });
  Rack.remove(id);
  res.json({ message: "Rak berhasil dihapus" });
};
