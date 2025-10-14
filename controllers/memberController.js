const Member = require('../models/memberModel');

exports.getMembers = (req, res) => {
  res.json(Member.getAll());
};

exports.getMemberById = (req, res) => {
  const member = Member.getById(req.params.id);
  if (!member) return res.status(404).json({ message: "Anggota tidak ditemukan" });
  res.json(member);
};

exports.addMember = (req, res) => {
  const newMember = { id: Date.now(), ...req.body };
  Member.add(newMember);
  res.status(201).json({ message: "Anggota berhasil ditambahkan", data: newMember });
};

exports.updateMember = (req, res) => {
  const id = req.params.id;
  const existing = Member.getById(id);
  if (!existing) return res.status(404).json({ message: "Anggota tidak ditemukan" });
  Member.update(id, req.body);
  res.json({ message: "Anggota berhasil diperbarui" });
};

exports.deleteMember = (req, res) => {
  const id = req.params.id;
  const existing = Member.getById(id);
  if (!existing) return res.status(404).json({ message: "Anggota tidak ditemukan" });
  Member.remove(id);
  res.json({ message: "Anggota berhasil dihapus" });
};
