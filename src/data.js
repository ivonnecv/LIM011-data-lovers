/* Manejo de data */

export const traerDataPokemon = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push({
      id: array[i].id,
      name: array[i].name,
      img: array[i].img,
      type: array[i].type,
      avg_spawns: array[i].avg_spawns,
      candy_count: array[i].candy_count,
      num: array[i].num,
      weaknesses: array[i].weaknesses,
      prev_evolution: array[i].prev_evolution,
      next_evolution: array[i].next_evolution,
    });
  }
  return newArray;
};

export const orderAz = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  newArray.sort((a, b) => (a.name > b.name ? 1 : -1));
  /*
  newArray.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  */
  return newArray;
};

export const orderZa = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  newArray.sort((a, b) => (a.name > b.name ? -1 : 1));
  /*
  newArray.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
*/
  return newArray;
};

export const filterType = (tipo, array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  const filtType = newArray.filter((elem) => (elem.type.indexOf(tipo) !== -1));
  /*
    const arrTipos = array[i].type;
    if (arrTipos.indexOf(tipo) !== -1) {
      nuevoArray.push(array[i]);
    }
    */
  return filtType;
};

export const orderTopTenAvg = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  newArray.sort((a, b) => (a.avg_spawns > b.avg_spawns ? -1 : 1));
  const newArrayTwo = [];

  for (let j = 0; j < 10; j += 1) {
    newArrayTwo.push(newArray[j]);
  }
  /*
    if (a.avg_spawns > b.avg_spawns){
      return -1;
    }
    if (a.avg_spawns < b.avg_spawns){
      return 1;
    }
    return 0;
  });
  */
  return newArrayTwo;
};

export const filterWeaknesses = (debilidad, array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  const filtWeaknesses = newArray.filter((elem) => (elem.weaknesses.indexOf(debilidad) !== -1));
  return filtWeaknesses;
};
