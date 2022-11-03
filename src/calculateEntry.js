const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const clientes = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entries) {
  // seu código aqui
  const idades = entries.map((elemento) => elemento.age);
  const crianca = idades.filter((idade) => idade < 18).length;
  const adulto = idades.filter((idade) => idade >= 18 && idade < 50).length;
  const senio = idades.filter((idade) => idade >= 50).length;
  return {
    child: crianca,
    adult: adulto,
    senior: senio,
  }; // { child: 3, adult: 2, senior: 1 }
}
// console.log(countEntrants());

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || !entrants.length) {
    return 0;
  }
  const crianca = prices.child * countEntrants(entrants).child;
  const adulto = prices.adult * countEntrants(entrants).adult;
  const senio = prices.senior * countEntrants(entrants).senior;

  return crianca + adulto + senio;
}
calculateEntry(clientes);

module.exports = { calculateEntry, countEntrants };
