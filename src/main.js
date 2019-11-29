
import POKEMON from '../data/pokemon/pokemon.js';
import {
  traerDataPokemon, orderAz, orderZa, filterType, orderTopTenAvg, filterWeaknesses,
} from './data.js';

const dataModificada = traerDataPokemon(POKEMON); // ARRAY DE objetos con 6 caracteristicas;
const seccionCard = document.querySelector('#seccion-card');
const pokeaz = orderAz(dataModificada);
const pokeza = orderZa(dataModificada);
const poketop10 = orderTopTenAvg(dataModificada);

const az = document.querySelector('#az');
const za = document.querySelector('#za');
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
                          <div id='poke${data[i].id}' class="card ${data[i].type[0]}">
                              <div class='card-items'> 
                                  <h2>${data[i].name}</h2>
                                  <h3>${data[i].num}</h3>
                                  <img class="verPokemon" src="${data[i].img}"/>
                                  <button id="verPokemon_${data[i].id}" data-id="${data[i].id}" class="buttonStyle">Ver</button>
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
const submenuType = document.querySelector('#submenuType');
submenuType.addEventListener('click', (event) => {
  clearCard(); // función limpiar arriba
  const getAttr = event.target.getAttribute('data-type');
  pokeLayout(filterType(getAttr, dataModificada));
});

const submenuWeaknesses = document.querySelector('#submenuWeaknesses');
submenuWeaknesses.addEventListener('click', (event) => {
  clearCard(); // funcion limpiar arriba
  const getAttr = event.target.getAttribute('data-debilidad');
  pokeLayout(filterWeaknesses(getAttr, dataModificada));
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

/* MODAL  */

// const button_modal = document.querySelector('#verPokemon');
const modalContainer = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');


const pokemodalName = document.querySelector('#pokemodal-name');
const pokemodalNum = document.querySelector('#pokemodal-num');
const pokemodalCandys = document.querySelector('#pokemodal-candys');
const pokemodalImg = document.querySelector('#pokemodal-img');
const pokemodalAvg = document.querySelector('#pokemodal-spawns');
const pokemodalType = document.querySelector('#pokemodal-type');
const pokemodalWeaknesses = document.querySelector('#pokemodal-weaknesses');
// const pokemodalPrevEvolution = document.querySelector('#pokemodal-pre-evolution');
// const pokemodalNextEvolution = document.querySelector('#pokemodal-next-evolution');

const pokeContainer = document.querySelector('#seccion-card');

pokeContainer.addEventListener('click', (event) => {
  const getDataId = event.target.getAttribute('data-id');
  // button_modal.addEventListener('click', (event) => {
  // let getDataId = event.target.getAttribute('data-id');

  modalContainer.classList.remove('modal-hide');
  modalContainer.classList.add('modal-show');

  /* Insert data */

  // console.log(dataModificada);

  for (let i = 0; i < dataModificada.length; i += 1) {
    if (dataModificada[i].id === parseInt(getDataId, 10)) {
      const dataName = dataModificada[i].name;
      const dataNum = dataModificada[i].num;
      const dataCandyCount = dataModificada[i].candy_count;
      const dataAvgSpawns = dataModificada[i].avg_spawns;
      const dataType = dataModificada[i].type;
      const dataWeaknesses = dataModificada[i].weaknesses;
      const dataImg = dataModificada[i].img;
      /*
      let dataPrevEvolution = dataModificada[i].id - 1;
      let dataNextEvolution = dataModificada[i].id + 1;
      */

      pokemodalName.innerHTML = dataName;
      pokemodalNum.innerHTML = dataNum;
      pokemodalCandys.innerHTML = dataCandyCount;
      pokemodalAvg.innerHTML = dataAvgSpawns;
      pokemodalType.innerHTML = dataType;
      pokemodalWeaknesses.innerHTML = dataWeaknesses;
      pokemodalImg.setAttribute('src', dataImg);
      // pokemodalPrevEvolution.setAttribute('src', urlPrev);
      // pokemodalNextEvolution.setAttribute('src', urlNext);

      /* if (dataModificada[i].prev_evolution === UNDEFINED) {
      // pre_evolution = 0
      // } */
    }
  }
});

modalClose.addEventListener('click', () => {
  modalContainer.classList.remove('modal-show');
  modalContainer.classList.add('modal-hide');
});
