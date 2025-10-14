// controllers/staffExtraController.js
const staff = require('../models/staffModel');

exports.searchStaff = (req, res) => {
  const keyword = req.query.q?.toLowerCase();
  if (!keyword) return res.json(staff);
  const result = staff.filter(s =>
    s.name.toLowerCase().includes(keyword) ||
    s.position.toLowerCase().includes(keyword)
  );
  res.json(result);
};

exports.getPaginatedStaff = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const start = (page - 1) * limit;
  const end = start + limit;
  res.json({
    total: staff.length,
    page,
    limit,
    data: staff.slice(start, end)
  });
};
