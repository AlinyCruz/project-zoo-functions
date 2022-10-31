const data = require('../data/zoo_data');

const { species } = data;
// const { residents } = species;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const tipoEspecie = species.find((specie) => specie.name === animal);
  return tipoEspecie.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('tigers', 50));

module.exports = getAnimalsOlderThan;
