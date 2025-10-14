const Book = require('../models/bookModel');

exports.getBooks = (req, res) => {
  res.json(Book.getAll());
};

exports.getBookById = (req, res) => {
  const book = Book.getById(req.params.id);
  if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
  res.json(book);
};

exports.addBook = (req, res) => {
  const newBook = { id: Date.now(), ...req.body };
  Book.add(newBook);
  res.status(201).json({ message: "Buku berhasil ditambahkan", data: newBook });
};

exports.updateBook = (req, res) => {
  const id = req.params.id;
  const existing = Book.getById(id);
  if (!existing) return res.status(404).json({ message: "Buku tidak ditemukan" });
  Book.update(id, req.body);
  res.json({ message: "Buku berhasil diperbarui" });
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;
  const existing = Book.getById(id);
  if (!existing) return res.status(404).json({ message: "Buku tidak ditemukan" });
  Book.remove(id);
  res.json({ message: "Buku berhasil dihapus" });
};
