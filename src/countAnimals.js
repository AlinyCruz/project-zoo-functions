const data = require('../data/zoo_data'); // 1 objeto com 2 arrays (species e employees) e 2 objetos (hours e prices)

const { species } = data; // 1 array com 9 objetos

const { residents } = species;

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const obj = {};
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const filtroSpecie = species.filter((specie) => specie.name === specie.animal);
  // const quantidadeSpecie = filtroSpecie.find((filtro) => filtro.residents.length);
  return filtroSpecie;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
