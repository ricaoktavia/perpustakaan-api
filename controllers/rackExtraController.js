const racks = require('../models/rackModel');

// Cari rak berdasarkan lokasi
exports.getRacksByLocation = (req, res) => {
  const { location } = req.params;
  const result = racks.filter(r => r.location.toLowerCase() === location.toLowerCase());
  result.length > 0
    ? res.json(result)
    : res.status(404).json({ message: 'Tidak ada rak di lokasi tersebut' });
};

// Hitung total kapasitas semua rak
exports.getTotalCapacity = (req, res) => {
  const total = racks.reduce((sum, r) => sum + r.capacity, 0);
  res.json({ totalCapacity: total });
};

// Cari rak dengan kapasitas di atas nilai tertentu
exports.getRacksAboveCapacity = (req, res) => {
  const minCap = parseInt(req.params.minCap);
  const result = racks.filter(r => r.capacity >= minCap);
  result.length > 0
    ? res.json(result)
    : res.status(404).json({ message: 'Tidak ada rak dengan kapasitas di atas batas' });
};
