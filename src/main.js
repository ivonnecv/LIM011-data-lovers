
import POKEMON from '../data/pokemon/pokemon.js';
import { traerDataPokemon, pokedata,  pokedata2, pokedata3, pokedata4 } from './data.js';




const dataModificada = traerDataPokemon(POKEMON) //ARRAY DE objetos con 3 caracteristicas;
const Seccioncard = document.querySelector('#seccion-card');
//const pokeaz = pokedata(POKEMON);
//const pokeza = pokedata2(pokeaz);


let az = document.querySelector('#az');
let za = document.querySelector('#za');
let tipo = document.querySelector('#tipo');
let topten = document.querySelector('#top10');

//INIT FUNCTION LAYOUT

function pokeLayout (data) {
  let stringTemplate = '';
  for(let i = 0; i < data.length; i++){
      stringTemplate += `
                          <div id='poke${data[i].id}' class='card'>
                              <div class='card-items'> 
                                  <h2>${data[i].name}</h2>
                                  <img class="verPokemon" src="${data[i].img}"/>
                                  <button id="verPokemon_${data[i].id}" class="buttonStyle">Ver</button>
                              </div>
                          </div>   
                          
                      `
  }
  //console.log(stringTemplate);
  Seccioncard.innerHTML = stringTemplate;
  //traerDataPokemon(POKEMON);

}


//console.log(Seccioncard);
/*
const home = document.querySelector('#sectionHome');
const one = document.querySelector('#sectionPokemon');

const atrapalos = document.querySelector('#atrapalosYa');
  atrapalos.addEventListener('click', function(){
 // console.log(home);
    home.classList.add('section-hide');
    one.classList.remove('section-hide');
    pokeLayout(dataModificada);
});
*/
az.addEventListener('click', function(){
  //alert('ABC');
    home.classList.add('section-hide');
    one.classList.remove('section-hide');  
  // pokeLayout(dataModificada);
  // alert('Az');
  pokeLayout(pokeaz);
  // pokedata(POKEMON);

  // console.log(dataModificada);
  // console.log(pokeaz);
})

za.addEventListener('click', function(){
  //alert('ABC');
  // alert('ZA');
      home.classList.add('section-hide');
    one.classList.remove('section-hide');  
  // pokedata(POKEMON);
  pokeLayout(pokeza);
})
/*
tipo.addEventListener('click', function(){
  //alert('tipo');
  pokedata3(POKEMON)
  pokeLayout(pokedata3);
})
*/
topten.addEventListener('click', function(){
  //alert('topten');
})


console.log('data original', POKEMON);
console.log('data ordenada az', pokedata(POKEMON));
console.log('data ordanada za', pokedata2(POKEMON));
console.log('data tipo', pokedata3('Grass',POKEMON));
console.log('data ordanada avg', pokedata4(POKEMON));


//Backtips y es la nueva forma de concatenar cadenas en es6 ${} interpolar variables




//funcion de comparacion con un operador ternario const pokedata = POKEMON.reverse((a,b) => (a.name > b.name ? 1:-1));

// pokedata(POKEMON);
// pokedata2(POKEMON);
// pokedata3('Normal', POKEMON);
// pokedata4(POKEMON);
// console.log(POKEMON);

//menu bar 
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}

