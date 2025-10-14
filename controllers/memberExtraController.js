const Member = require('../models/memberModel');

// 🔎 Cari anggota berdasarkan nama atau email
exports.searchMembers = (req, res) => {
  const { keyword } = req.query;
  if (!keyword) return res.status(400).json({ message: "Masukkan keyword pencarian" });
  const result = Member.getAll().filter(m =>
    m.name.toLowerCase().includes(keyword.toLowerCase()) ||
    m.email.toLowerCase().includes(keyword.toLowerCase())
  );
  res.json(result);
};

// 📄 Pagination daftar anggota
exports.paginateMembers = (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const members = Member.getAll();
  const start = (page - 1) * limit;
  const paginated = members.slice(start, start + parseInt(limit));

  res.json({
    total: members.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
};
