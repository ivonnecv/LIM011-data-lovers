/* Manejo de data */

export const traerDataPokemon = (array) => {
  const newArray = []; 
  for(let i = 0;  i<array.length; i++){
   newArray.push({id: array[i].id, name: array[i].name, img:array[i].img, type: array[i].type, avg_spawns: array[i].avg_spawns});
  }
  return newArray;
}

export const pokedata = (POKEMON) => {
  /*
 POKEMON.sort((a,b) => (a.name > b.name ? 1:-1));
  return POKEMON;
  */
  POKEMON.sort((a,b) => {
    
    if (a.name < b.name){
      return -1;  
    } 
    
    if (a.name > b.name){
      return 1;
    }
    
    return 0;
  });

  // traerDataPokemon(POKEMON);
  // console.log(POKEMON);
  return POKEMON;

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
  return POKEMON;
  // console.log(pokedata2);
}

export const pokedata3 = (tipo, POKEMON) => {
 
  const nuevoArray = [];
  for (let i=0; i<POKEMON.length; i++){
    const arrTipos = POKEMON[i].type;
    if(arrTipos.indexOf(tipo) != -1){
      nuevoArray.push(POKEMON[i]);
    }
  }
  console.log(nuevoArray);
  return nuevoArray; 
}

export const pokedata4 = (POKEMON) => {

  
    for (let i=0; i<11; i++) {
      POKEMON.sort((a,b) => (b.avg_spawns > a.avg_spawns ? 1:-1));
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
 
  
  