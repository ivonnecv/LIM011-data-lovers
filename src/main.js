
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
  clearCard();
  const getAttr = event.target.getAttribute('data-type');
  pokeLayout(filterType(getAttr, dataModificada));
});

const submenuWeaknesses = document.querySelector('#submenuWeaknesses');
submenuWeaknesses.addEventListener('click', (event) => {
  clearCard();
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

let button_modal = document.querySelector('#verPokemon_1');
let modal_container = document.querySelector('.modal-container');
let modal_close = document.querySelector('.modal-close');


let pokemodal_name = document.querySelector('#pokemodal-name');
let pokemodal_num = document.querySelector('#pokemodal-num');
let pokemodal_candys = document.querySelector('#pokemodal-candys');
let pokemodal_img = document.querySelector('#pokemodal-img');


button_modal.addEventListener('click', (event) => {

//  alert('Modal 1');

  modal_container.classList.remove('modal-hide');
  modal_container.classList.add('modal-show');

  /*Insert data*/

   let get_data_id = event.target.getAttribute('data-id');
    
   //console.log(dataModificada);

   for (let i = 0; i < dataModificada.length; i += 1 ) {
      if (dataModificada[i].id == parseInt(get_data_id)) {
        
        let data_name = dataModificada[i].name;
        let data_num = dataModificada[i].num;
        let data_candy_count = dataModificada[i].candy_count;
        
        let data_img = dataModificada[i].img;

        pokemodal_name.innerHTML = data_name;
        pokemodal_num.innerHTML = data_num;
        pokemodal_candys.innerHTML = data_candy_count;

        pokemodal_img.setAttribute('src', data_img);
        
        
        //if (dataModificada[i].prev_evolution == NULL) {
          
        //}

      }
   }

  

});

modal_close.addEventListener('click', () => {
  modal_container.classList.remove('modal-show');
  modal_container.classList.add('modal-hide');
});

