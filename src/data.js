/* Manejo de data */

export const traerDataPokemon = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push({
      // eslint-disable-next-line max-len
      id: array[i].id, name: array[i].name, img: array[i].img, type: array[i].type, avg_spawns: array[i].avg_spawns,
    });
  }
  return newArray;
};

export const orderAz = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  newArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return newArray;
  /*
 POKEMON.sort((a,b) => (a.name > b.name ? 1: -1));
  return POKEMON;
  */
};

export const orderZa = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  newArray.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
  return newArray;
};

export const pokeType = (tipo, array) => {
  const nuevoArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const arrTipos = array[i].type;
    if (arrTipos.indexOf(tipo) !== -1) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
};

export const orderTopTenAvg = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  newArray.sort((a, b) => (b.avg_spawns > a.avg_spawns ? 1 : -1));
  const newArrayTwo = [];

  for (let j = 0; j < 10; j += 1) {
    newArrayTwo.push(newArray[j]);
  }
  /*
    if (a.avg_spawns < b.avg_spawns){
      return 1;
    }
    if (a.avg_spawns > b.avg_spawns){
      return -1;
    }
    return 0;
  });
*/
  return newArrayTwo;
};
