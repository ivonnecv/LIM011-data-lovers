
import POKEMON from '../data/pokemon/pokemon.js';
import {
  traerDataPokemon, orderAz, orderZa, pokeType, orderTopTenAvg,
} from './data.js';


const dataModificada = traerDataPokemon(POKEMON); // ARRAY DE objetos con 3 caracteristicas;
const seccionCard = document.querySelector('#seccion-card');
const pokeaz = orderAz(POKEMON);
const pokeza = orderZa(POKEMON);
// const poketipo = pokeType(POKEMON);
const poketop10 = orderTopTenAvg(POKEMON);

const az = document.querySelector('#az');
const za = document.querySelector('#za');
// const tipo = document.querySelector('#tipo');
const top10 = document.querySelector('#top10');

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
  // console.log(stringTemplate);
  seccionCard.innerHTML = stringTemplate;
  // traerDataPokemon(POKEMON);
}
// console.log(Seccioncard);
pokeLayout(dataModificada);

az.addEventListener('click', () => {
  const elemAz = document.querySelector('.card');
  elemAz.parentNode.removeChild(elemAz);
  pokeLayout(pokeaz);
});

za.addEventListener('click', () => {
  const elemZa = document.querySelector('.card');
  elemZa.parentNode.removeChild(elemZa);
  pokeLayout(pokeza);
});

top10.addEventListener('click', () => {
  const elemTop10 = document.querySelector('.card');
  elemTop10.parentNode.removeChild(elemTop10);
  pokeLayout(poketop10);
});

const submenu = document.querySelector('#submenu');
submenu.addEventListener('click', (event) => {
  const elemTp = document.querySelector('.card');
  elemTp.parentNode.removeChild(elemTp);
  const getAttr = event.target.getAttribute('data-type');
  pokeLayout(pokeType(getAttr, POKEMON));
});

/*
console.log('data original', POKEMON);
console.log('data ordenada az', orderAz(POKEMON));
console.log('data ordanada za', orderZa(POKEMON));
console.log('data tipo', pokeType('Water',POKEMON));
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
/*
function navbarTogglerClick() {
  navbarToggler.classList.toggle('open-navbar-toggler');
  navbarMenu.classList.toggle('open');
}
*/

// eslint-disable-next-line no-use-before-define
navbarLinks.forEach((elem) => elem.addEventListener('click', navbarLinkClick));

function navbarLinkClick() {
  if (navbarMenu.classList.contains('open')) {
    navbarToggler.click();
  }
}
