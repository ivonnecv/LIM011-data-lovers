/* Manejo de data */

export const traerDataPokemon = (array) => {
  const newArray = []; 
  for(let i = 0;  i<array.length; i++){
   newArray.push({identificador: array[i].id, nombre: array[i].name, imagen:array[i].img, tipo: array[i].type, aparicion: array[i].avg_spawns});
  }
  return newArray;
}

export const pokedata = (POKEMON) => {
  POKEMON.sort((a,b) => {
    if (a.name < b.name){
      return -1;  
    } 
    if (a.name > b.name){
      return 1;
    }
    return 0;
  });
  //console.log(pokedata);
}

export const pokedata2 = (POKEMON) => {

  POKEMON.reverse((a,b) => {
    if (a.name < b.name){
      return -1;  
    } 
    if (a.name > b.name){
      return 1;
    }
    return 0;
  });
  //console.log(pokedata2);
}

export const pokedata3 = (tipo, POKEMON) => {
 
  const nuevoArray = [];
  for (let i=0; i<POKEMON.length; i++){
    const arrTipos = POKEMON[i].type;
    if(arrTipos.indexOf(tipo) != -1){
      nuevoArray.push(POKEMON[i]);
    }
  }
  //console.log(nuevoArray);
  return nuevoArray; 
}

export const pokedata4 = (POKEMON) => {

  let pr = POKEMON.length;
  let pr2 = pr<11;
  
    for (let i=pr2; i>=0; i++) {
      POKEMON.sort((a,b) => (a.avg_spawns < b.avg_spawns ? 1:-1));
    }
    /*
    //POKEMON.sort((a,b) => {
    //console.log(b.avg_spawns + ' ' + b.name);

    if (a.avg_spawns < b.avg_spawns){
      return 1;  
    } 
    if (a.avg_spawns > b.avg_spawns){
      return -1;
    }

    return 0;
  });
  */
   console.log(pokedata4);
}
 
  
  