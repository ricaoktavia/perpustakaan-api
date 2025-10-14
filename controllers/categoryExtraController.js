const Category = require('../models/categoryModel');

// 🔎 Cari kategori berdasarkan nama
exports.searchCategories = (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).json({ message: "Masukkan keyword pencarian" });
  }

  const result = Category.getAllCategories().filter(cat =>
    cat.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "Kategori tidak ditemukan" });
  }

  res.json(result);
};

// 📄 Pagination (menampilkan data per halaman)
exports.paginateCategories = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const categories = Category.getAllCategories();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginated = categories.slice(startIndex, endIndex);

  res.json({
    total: categories.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
};
