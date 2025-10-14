let returns = [
  { id: 1, loan_id: 1, return_date: "2025-10-01", fine_id: 1 },
  { id: 2, loan_id: 2, return_date: "2025-10-03", fine_id: null }
];

exports.getAll = () => returns;

exports.getById = (id) => returns.find(r => r.id == id);

exports.add = (data) => {
  returns.push(data);
};

exports.update = (id, data) => {
  const index = returns.findIndex(r => r.id == id);
  if (index !== -1) {
    returns[index] = { ...returns[index], ...data };
  }
};

exports.remove = (id) => {
  returns = returns.filter(r => r.id != id);
};
