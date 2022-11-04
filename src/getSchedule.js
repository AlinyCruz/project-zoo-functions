/* eslint-disable no-unused-expressions */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diasDaSemana = (paramDia) => {
  const semana = Object.keys(hours); // array semana -> ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday']
  const diaDaSemana = semana.find((dia) => dia === paramDia);
  return diaDaSemana;
};
// console.log(diasDaSemana('Tuesday')); // retorna o dia digitado como parâmetro -> Tuesday

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
  const obj = {};
  const abertura = hours[dia].open; // open -> 8
  const fechamento = hours[dia].close; // close -> 6
  obj[diasDaSemana(dia)] = {
    officeHour: `Open from ${abertura}am until ${fechamento}pm`,
    exhibition: diasDoAnimal(dia),
  };
  return obj;
};

// console.log(retornoObjetoDiaDaSemana(diasDaSemana('Tuesday'))); // retorna o objeto com informações do dia digitado -> dia - horário que abre e fecha - animais desse dia.

//----------------------------------------------------------------------------------------------

const semParametro = () => {
  const obj = {};
  const dias = Object.keys(hours);
  for (let i = 0; i < dias.length; i += 1) {
    const abertura = hours[dias[i]].open; // open -> 8
    const fechamento = hours[dias[i]].close; // close -> 6
    obj[diasDaSemana(dias[i])] = {
      officeHour: `Open from ${abertura}am until ${fechamento}pm`,
      exhibition: diasDoAnimal(dias[i]),
    };
  } return obj;
};
//  console.log(semParametro(diasDaSemana('Thursday')));

//----------------------------------------------------------------------------------------------

function getSchedule(scheduleTarget) {
  // RETORNO PARA SEM PARÂMETRO OU INDEFINIDO
  if ((scheduleTarget !== diasDaSemana(scheduleTarget) && scheduleTarget
  !== diasDoAnimal(scheduleTarget)) || !scheduleTarget) {
    return semParametro();
  }
  // RETORNO PARA PARÂMETRO : DIA DA SEMANA
  if (scheduleTarget === diasDaSemana(scheduleTarget)) {
    return retornoObjetoDiaDaSemana(scheduleTarget);
  }
  // RETORNO PARA PARÂMETRO : ANIMAL
  return species.filter((dia) => dia.name === scheduleTarget)
    .find((animal) => animal.availability).availability;
  // ['Wednesday','Friday','Saturday','Tuesday']
}
console.log(getSchedule());

module.exports = getSchedule;
