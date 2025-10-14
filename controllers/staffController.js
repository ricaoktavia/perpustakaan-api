// controllers/staffController.js
const staff = require('../models/staffModel');

exports.getAllStaff = (req, res) => {
  res.json(staff);
};

exports.getStaffById = (req, res) => {
  const data = staff.find(s => s.id == req.params.id);
  if (data) res.json(data);
  else res.status(404).json({ message: 'Staff tidak ditemukan' });
};

exports.createStaff = (req, res) => {
  const newStaff = { id: staff.length + 1, ...req.body };
  staff.push(newStaff);
  res.status(201).json(newStaff);
};

exports.updateStaff = (req, res) => {
  const index = staff.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    staff[index] = { ...staff[index], ...req.body };
    res.json(staff[index]);
  } else res.status(404).json({ message: 'Staff tidak ditemukan' });
};

exports.deleteStaff = (req, res) => {
  const index = staff.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    staff.splice(index, 1);
    res.json({ message: 'Staff dihapus' });
  } else res.status(404).json({ message: 'Staff tidak ditemukan' });
};
