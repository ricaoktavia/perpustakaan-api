let members = [
  { id: 1, name: "Rica Oktavia", email: "rica@example.com", phone: "08123456789", address: "Jakarta" },
  { id: 2, name: "Umar Mansyur", email: "umar@example.com", phone: "08198765432", address: "Surabaya" }
];

exports.getAll = () => members;

exports.getById = (id) => members.find(m => m.id == id);

exports.add = (data) => {
  members.push(data);
};

exports.update = (id, data) => {
  const index = members.findIndex(m => m.id == id);
  if (index !== -1) {
    members[index] = { ...members[index], ...data };
  }
};

exports.remove = (id) => {
  members = members.filter(m => m.id != id);
};
