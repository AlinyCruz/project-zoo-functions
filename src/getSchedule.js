/* eslint-disable no-unused-expressions */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diasDaSemana = (paramDia) => {
  const semana = Object.keys(hours); // array semana -> ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday']
  const diaDaSemana = semana.find((dia) => dia === paramDia);
  return diaDaSemana;
};
//console.log(diasDaSemana('Tuesday')); // retorna o dia digitado como parâmetro -> Tuesday

//----------------------------------------------------------------------------------------------

const diasDoAnimal = (paramAnimal) => {
  const animalDoDia = species.filter((animal) => animal.availability
    .includes(diasDaSemana(paramAnimal)))
    .map((dia) => dia.name);
  return animalDoDia;
};
// console.log(diasDoAnimal(diasDaSemana('Tuesday'))); // retorna o array dos animais ref. ao dia digitado ->[ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ]

//----------------------------------------------------------------------------------------------

const retornoObjetoDiaDaSemana = (dia) => {
  const abertura = hours[dia].open; // open -> 8
  const fechamento = hours[dia].close; // close -> 6
  return `${diasDaSemana('Tuesday')} : {
    officeHour: Open from ${abertura}am until ${fechamento}pm,
    exhibition: ${diasDoAnimal('Tuesday').split()},
  }`;
};
// console.log(retornoObjetoDiaDaSemana(diasDaSemana('Tuesday'))); // retorna o objeto com informações do dia digitado -> dia - horário que abre e fecha - animais desse dia.

//----------------------------------------------------------------------------------------------

const semParametro = (dia) => {
  const abertura = hours[dia].open; // open -> 8
  const fechamento = hours[dia].close; // close -> 6
  for (let i = 0; i < species.length; i += 1) {
    return `${diasDaSemana(dia)} : {
      officeHour: Open from ${abertura}am until ${fechamento}pm,
      exhibition: [${diasDoAnimal(dia)}],
    }`;
  }
};
//  console.log(semParametro(diasDaSemana('Thursday')));

//----------------------------------------------------------------------------------------------

function getSchedule(scheduleTarget) {
  // RETORNO PARA SEM PARÂMETRO OU INDEFINIDO
  // if (scheduleTarget !== diasDaSemana() || scheduleTarget !== diasDoAnimal() || !scheduleTarget) {
  //   return semParametro();
  // };
  // // RETORNO PARA PARÂMETRO : DIA DA SEMANA
  // if (scheduleTarget === diasDaSemana() && scheduleTarget === diasDoAnimal()) {
  //   return retornoObjetoDiaDaSemana(diasDaSemana());
  // };
  // RETORNO PARA PARÂMETRO : ANIMAL
  const arrayDias = species.filter((dia) => dia.name === scheduleTarget)
    .find((animal) => animal.availability).availability;
  return arrayDias; // ['Wednesday','Friday','Saturday','Tuesday']
};
console.log(getSchedule());

module.exports = getSchedule;
