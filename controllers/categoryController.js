const categoryModel = require('../models/categoryModel');

exports.getCategories = (req, res) => {
  res.json(categoryModel.getAllCategories());
};

exports.getCategoryById = (req, res) => {
  const id = parseInt(req.params.id);
  const category = categoryModel.getCategoryById(id);
  if (category) res.json(category);
  else res.status(404).json({ message: "Kategori tidak ditemukan" });
};

exports.addCategory = (req, res) => {
  const newCategory = categoryModel.addCategory(req.body);
  res.status(201).json(newCategory);
};

exports.updateCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = categoryModel.updateCategory(id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ message: "Gagal update, kategori tidak ditemukan" });
};

exports.deleteCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = categoryModel.deleteCategory(id);
  if (deleted) res.json({ message: "Kategori dihapus" });
  else res.status(404).json({ message: "Kategori tidak ditemukan" });
};
