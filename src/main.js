import POKEMON from './data/pokemon/pokemon.js'
import { traerDataPokemon, pokedata,  pokedata2 } from './data.js';

const dataModificada = traerDataPokemon(POKEMON) //ARRAY DE objetos con 3 caracteristicas;
const Seccioncard = document.querySelector('#seccion-card');


let abc = document.getElementById('abc');
let tipo = document.getElementById('tipo');
let topten = document.getElementById('top10');

//INIT FUNCTION LAYOUT

function pokeLayout (data) {
  let stringTemplate = '';
  for(let i = 0; i < data.length; i++){
      stringTemplate += `
                          <div id='poke${data[i].identificador}' class='card'>
                              <div class='card-items'> 
                                  <h2>${data[i].nombre}</h2>
                                  <img class="verPokemon" src="${data[i].imagen}"/>
                                  <button id="verPokemon_${data[i].identificador}" class="buttonStyle">Ver</button>
                              </div>
                          </div>   
                          
                      `
  }
  //console.log(stringTemplate);
  Seccioncard.innerHTML = stringTemplate;
  //traerDataPokemon(POKEMON);

}


//console.log(Seccioncard);




abc.addEventListener('click', function(){
  //alert('ABC');
  pokeLayout(dataModificada);
})

tipo.addEventListener('click', function(){
  //alert('tipo');
 
  pokeLayout(pokedata);
})

topten.addEventListener('click', function(){
  //alert('topten');
})






//Backtips y es la nueva forma de concatenar cadenas en es6 ${} interpolar variables




//funcion de comparacion con un operador ternario const pokedata = POKEMON.reverse((a,b) => (a.name > b.name ? 1:-1));
//console.log(pokedata)





//console.log(POKEMON);
pokedata(POKEMON);
pokedata2(POKEMON);
console.log(POKEMON);


//console.log(POKEMON);

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
