let racks = [
  { id: 1, location: "Lantai 1 - A", capacity: 100 },
  { id: 2, location: "Lantai 2 - B", capacity: 80 },
  { id: 3, location: "Lantai 3 - C", capacity: 120 }
];

exports.getAll = () => racks;

exports.getById = (id) => racks.find(r => r.id == id);

exports.add = (data) => {
  racks.push(data);
};

exports.update = (id, data) => {
  const index = racks.findIndex(r => r.id == id);
  if (index !== -1) {
    racks[index] = { ...racks[index], ...data };
  }
};

exports.remove = (id) => {
  racks = racks.filter(r => r.id != id);
};
