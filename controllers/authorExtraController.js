const Author = require('../models/authorModel');

// 🔎 Search penulis berdasarkan nama
exports.searchAuthors = (req, res) => {
  const { keyword } = req.query;
  if (!keyword) return res.status(400).json({ message: "Masukkan keyword pencarian" });
  const result = Author.getAll().filter(a =>
    a.name.toLowerCase().includes(keyword.toLowerCase())
  );
  res.json(result);
};

// 📄 Pagination untuk daftar penulis
exports.paginateAuthors = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const authors = Author.getAll();
  const start = (page - 1) * limit;
  const paginated = authors.slice(start, start + parseInt(limit));

  res.json({
    total: authors.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
};
