const Publisher = require('../models/publisherModel');

// 🔍 Cari penerbit berdasarkan nama
exports.searchPublishers = (req, res) => {
  const { keyword } = req.query;
  if (!keyword) return res.status(400).json({ message: "Masukkan keyword pencarian" });

  const result = Publisher.getAllPublishers().filter(p =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (result.length === 0)
    return res.status(404).json({ message: "Penerbit tidak ditemukan" });

  res.json(result);
};

// 📄 Pagination (halaman + limit)
exports.paginatePublishers = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const publishers = Publisher.getAllPublishers();

  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  const paginated = publishers.slice(start, end);

  res.json({
    total: publishers.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
};
