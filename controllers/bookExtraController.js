const Book = require('../models/bookModel');

// 🔎 Search buku berdasarkan judul
exports.searchBooks = (req, res) => {
  const { keyword } = req.query;
  if (!keyword) return res.status(400).json({ message: "Masukkan keyword pencarian" });
  const result = Book.getAll().filter(b =>
    b.title.toLowerCase().includes(keyword.toLowerCase())
  );
  res.json(result);
};

// 📄 Pagination (halaman + limit)
exports.paginateBooks = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const books = Book.getAll();
  const start = (page - 1) * limit;
  const paginated = books.slice(start, start + parseInt(limit));

  res.json({
    total: books.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
};
