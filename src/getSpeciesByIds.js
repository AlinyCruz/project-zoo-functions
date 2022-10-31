const data = require('../data/zoo_data');

// console.log(data);

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const id = species.filter((specie) => ids.includes(specie.id));
  return id;
}
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

module.exports = getSpeciesByIds;
