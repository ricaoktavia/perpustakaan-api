let authors = [
  { id: 1, name: "J.K. Rowling", country: "Inggris" },
  { id: 2, name: "Andrea Hirata", country: "Indonesia" }
];

exports.getAll = () => authors;

exports.getById = (id) => authors.find(a => a.id == id);

exports.add = (data) => {
  authors.push(data);
};

exports.update = (id, data) => {
  const index = authors.findIndex(a => a.id == id);
  if (index !== -1) {
    authors[index] = { ...authors[index], ...data };
  }
};

exports.remove = (id) => {
  authors = authors.filter(a => a.id != id);
};
