const Author = require('../models/authorModel');

exports.getAuthors = (req, res) => {
  res.json(Author.getAll());
};

exports.getAuthorById = (req, res) => {
  const author = Author.getById(req.params.id);
  if (!author) return res.status(404).json({ message: "Penulis tidak ditemukan" });
  res.json(author);
};

exports.addAuthor = (req, res) => {
  const newAuthor = { id: Date.now(), ...req.body };
  Author.add(newAuthor);
  res.status(201).json({ message: "Penulis berhasil ditambahkan", data: newAuthor });
};

exports.updateAuthor = (req, res) => {
  const id = req.params.id;
  const existing = Author.getById(id);
  if (!existing) return res.status(404).json({ message: "Penulis tidak ditemukan" });
  Author.update(id, req.body);
  res.json({ message: "Penulis berhasil diperbarui" });
};

exports.deleteAuthor = (req, res) => {
  const id = req.params.id;
  const existing = Author.getById(id);
  if (!existing) return res.status(404).json({ message: "Penulis tidak ditemukan" });
  Author.remove(id);
  res.json({ message: "Penulis berhasil dihapus" });
};
