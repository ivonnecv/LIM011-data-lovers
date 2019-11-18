
import POKEMON from '../data/pokemon/pokemon.js';
import { traerDataPokemon, pokedata,  pokedata2, pokedata3, pokedata4 } from './data.js';




const dataModificada = traerDataPokemon(POKEMON) //ARRAY DE objetos con 3 caracteristicas;
const Seccioncard = document.querySelector('#seccion-card');
const pokeaz = pokedata(POKEMON);
const pokeza = pokedata2(POKEMON);
// const poketipo = pokedata3(POKEMON);
const poketop10 = pokedata4(POKEMON); 



let az = document.querySelector('#az');
let za = document.querySelector('#za');
let tipo = document.querySelector('#tipo');
let top10 = document.querySelector('#top10');

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


pokeLayout(dataModificada);

az.addEventListener('click', function(){
  
  let elemAz = document.querySelector('.card');
  elemAz.parentNode.removeChild(elemAz);
  pokeLayout(pokeaz);
})


za.addEventListener('click', function(){
  
  let elemZa = document.querySelector('.card');
  elemZa.parentNode.removeChild(elemZa);
  pokeLayout(pokeza);
})


top10.addEventListener('click', function(){
  let elemTop10 = document.querySelector('.card');
  elemTop10.parentNode.removeChild(elemTop10);
  pokeLayout(poketop10);
})


console.log('data original', POKEMON);
console.log('data ordenada az', pokedata(POKEMON));
console.log('data ordanada za', pokedata2(POKEMON));
console.log('data tipo', pokedata3('Water',POKEMON));
console.log('top 10 avg', pokedata4(POKEMON));


//Backtips y es la nueva forma de concatenar cadenas en es6 ${} interpolar variables

//funcion de comparacion con un operador ternario const pokedata = POKEMON.reverse((a,b) => (a.name > b.name ? 1:-1));

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



let submenu = document.querySelector('#submenu');


submenu.addEventListener('click', function(event){

  let elemTp = document.querySelector('.card');
  elemTp.parentNode.removeChild(elemTp);
//
  let get_attr = event.target.getAttribute('data-type');

  // alert(get_attr);

  pokeLayout(pokedata3(get_attr,POKEMON));

});



