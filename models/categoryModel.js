let categories = [
  { id: 1, name: "Fiksi" },
  { id: 2, name: "Non-Fiksi" },
  { id: 3, name: "Edukasi" }
];

module.exports = {
  getAllCategories: () => categories,

  getCategoryById: (id) => categories.find(c => c.id === id),

  addCategory: (category) => {
    category.id = categories.length + 1;
    categories.push(category);
    return category;
  },

  updateCategory: (id, newData) => {
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...newData };
      return categories[index];
    }
    return null;
  },

  deleteCategory: (id) => {
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      return categories.splice(index, 1);
    }
    return null;
  }
};
