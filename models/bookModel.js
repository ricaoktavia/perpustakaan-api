let books = [
  { id: 1, title: "Harry Potter", author_id: 1, category_id: 1, publisher_id: 1, rack_id: 1 },
  { id: 2, title: "Laskar Pelangi", author_id: 2, category_id: 2, publisher_id: 2, rack_id: 1 }
];

exports.getAll = () => books;

exports.getById = (id) => books.find(b => b.id == id);

exports.add = (data) => {
  books.push(data);
};

exports.update = (id, data) => {
  const index = books.findIndex(b => b.id == id);
  if (index !== -1) {
    books[index] = { ...books[index], ...data };
  }
};

exports.remove = (id) => {
  books = books.filter(b => b.id != id);
};
