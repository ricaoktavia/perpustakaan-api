let fines = [
  { id: 1, member_id: 1, loan_id: 1, amount: 5000, paid: false },
  { id: 2, member_id: 2, loan_id: 3, amount: 10000, paid: true },
];

// 🔹 Ambil semua data denda
exports.getAllFines = () => fines;

// 🔹 Ambil denda berdasarkan ID
exports.getFineById = (id) => fines.find(f => f.id == id);

// 🔹 Tambah denda baru
exports.addFine = (data) => {
  fines.push(data);
};

// 🔹 Update denda
exports.updateFine = (id, data) => {
  const index = fines.findIndex(f => f.id == id);
  if (index !== -1) {
    fines[index] = { ...fines[index], ...data };
  }
};

// 🔹 Hapus denda
exports.deleteFine = (id) => {
  fines = fines.filter(f => f.id != id);
};
