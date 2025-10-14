let publishers = [
  { id: 1, name: "Gramedia", address: "Jakarta", contact: "021-5555555" },
  { id: 2, name: "Mizan", address: "Bandung", contact: "022-8888888" },
];

// 🔹 Ambil semua penerbit
exports.getAllPublishers = () => publishers;

// 🔹 Ambil penerbit berdasarkan ID
exports.getPublisherById = (id) => publishers.find(p => p.id == id);

// 🔹 Tambah penerbit baru
exports.addPublisher = (data) => {
  publishers.push(data);
};

// 🔹 Update penerbit
exports.updatePublisher = (id, data) => {
  const index = publishers.findIndex(p => p.id == id);
  if (index !== -1) {
    publishers[index] = { ...publishers[index], ...data };
  }
};

// 🔹 Hapus penerbit
exports.deletePublisher = (id) => {
  publishers = publishers.filter(p => p.id != id);
};
