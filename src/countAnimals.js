const data = require('../data/zoo_data'); // 1 objeto com 2 arrays (species e employees) e 2 objetos (hours e prices)

const { species } = data; // 1 array com 9 objetos

function countAnimals(animal) {
  // seu código aqui
  // se o parametro estiver vazio retornar:
  if (animal === undefined) {
    const obj = {};
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  // se não tiver o sexo do animal retornar:
  if (animal.sex === undefined) {
    const quantiaEspecie = species.find((specie) => specie.name === animal.specie);
    return quantiaEspecie.residents.length;
  }
  const nome = species.find((specie) => specie.name === animal.specie).residents
    .filter((resident) => resident.sex === animal.sex).length;
  return nome;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
