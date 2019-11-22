
import POKEMON from '../data/pokemon/pokemon.js';
import {
  traerDataPokemon, orderAz, orderZa, filterType, orderTopTenAvg, filterWeaknesses,
} from './data.js';

const dataModificada = traerDataPokemon(POKEMON); // ARRAY DE objetos con 3 caracteristicas;
const seccionCard = document.querySelector('#seccion-card');
const pokeaz = orderAz(dataModificada);
const pokeza = orderZa(dataModificada);
// const poketipo = filterType(POKEMON);
const poketop10 = orderTopTenAvg(dataModificada);

const az = document.querySelector('#az');
const za = document.querySelector('#za');
// const tipo = document.querySelector('#tipo');
const top10 = document.querySelector('#top10');

// clear card
function clearCard() {
  const element = document.querySelector('.card');
  element.parentNode.removeChild(element);
}

// INIT FUNCTION LAYOUT

function pokeLayout(data) {
  let stringTemplate = '';
  for (let i = 0; i < data.length; i += 1) {
    stringTemplate += `
                          <div id='poke${data[i].id}' class='card'>
                              <div class='card-items'> 
                                  <h2>${data[i].name}</h2>
                                  <img class="verPokemon" src="${data[i].img}"/>
                                  <button id="verPokemon_${data[i].id}" class="buttonStyle">Ver</button>
                              </div>
                          </div>   
                          
                      `;
  }

  seccionCard.innerHTML = stringTemplate;
}
// console.log(Seccioncard);
pokeLayout(dataModificada);

az.addEventListener('click', () => {
  clearCard();
  pokeLayout(pokeaz);
});

za.addEventListener('click', () => {
  clearCard();
  pokeLayout(pokeza);
});

top10.addEventListener('click', () => {
  clearCard();
  pokeLayout(poketop10);
});

// traer elemento actual donde ocurre el evento
const submenu = document.querySelector('#submenu');
submenu.addEventListener('click', (event) => {
  clearCard();
  const getAttr = event.target.getAttribute('data-type');
  pokeLayout(filterType(getAttr, dataModificada));
});

/*
console.log('data original', POKEMON);
console.log('data ordenada az', orderAz(POKEMON));
console.log('data ordanada za', orderZa(POKEMON));
console.log('data tipo', filterType('Water',POKEMON));
console.log('top 10 avg', orderTopTenAvg(POKEMON));
*/

// menu bar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar ul');
const navbarLinks = document.querySelectorAll('.navbar a');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('open-navbar-toggler');
  navbarMenu.classList.toggle('open');
});

navbarLinks.forEach((elem) => elem.addEventListener('click', () => {
  if (navbarMenu.classList.contains('open')) {
    navbarToggler.click();
  }
}));
