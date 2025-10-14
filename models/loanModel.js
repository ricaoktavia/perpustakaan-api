let loans = [
  { id: 1, member_id: 1, book_id: 1, loan_date: "2025-10-01", due_date: "2025-10-08", returned: false },
  { id: 2, member_id: 2, book_id: 2, loan_date: "2025-10-02", due_date: "2025-10-09", returned: true },
];

// 🔹 Ambil semua data peminjaman
exports.getAllLoans = () => loans;

// 🔹 Ambil peminjaman berdasarkan ID
exports.getLoanById = (id) => loans.find(l => l.id == id);

// 🔹 Tambah peminjaman baru
exports.addLoan = (data) => {
  loans.push(data);
};

// 🔹 Update peminjaman
exports.updateLoan = (id, data) => {
  const index = loans.findIndex(l => l.id == id);
  if (index !== -1) {
    loans[index] = { ...loans[index], ...data };
  }
};

// 🔹 Hapus peminjaman
exports.deleteLoan = (id) => {
  loans = loans.filter(l => l.id != id);
};
