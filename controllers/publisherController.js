const Publisher = require('../models/publisherModel');

// 🔹 GET semua penerbit
exports.getPublishers = (req, res) => {
  res.json(Publisher.getAllPublishers());
};

// 🔹 GET penerbit by ID
exports.getPublisherById = (req, res) => {
  const publisher = Publisher.getPublisherById(req.params.id);
  if (!publisher) return res.status(404).json({ message: "Penerbit tidak ditemukan" });
  res.json(publisher);
};

// 🔹 POST tambah penerbit
exports.addPublisher = (req, res) => {
  const newPublisher = { id: Date.now(), ...req.body };
  Publisher.addPublisher(newPublisher);
  res.status(201).json({ message: "Penerbit berhasil ditambahkan", data: newPublisher });
};

// 🔹 PUT update penerbit
exports.updatePublisher = (req, res) => {
  const id = req.params.id;
  const existing = Publisher.getPublisherById(id);
  if (!existing) return res.status(404).json({ message: "Penerbit tidak ditemukan" });
  Publisher.updatePublisher(id, req.body);
  res.json({ message: "Penerbit berhasil diperbarui" });
};

// 🔹 DELETE hapus penerbit
exports.deletePublisher = (req, res) => {
  const id = req.params.id;
  const existing = Publisher.getPublisherById(id);
  if (!existing) return res.status(404).json({ message: "Penerbit tidak ditemukan" });
  Publisher.deletePublisher(id);
  res.json({ message: "Penerbit berhasil dihapus" });
};
