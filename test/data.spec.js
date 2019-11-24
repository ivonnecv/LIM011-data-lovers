/* eslint-disable no-dupe-keys */
// importamos la función `example`
import {
  traerDataPokemon, orderAz, orderZa, filterType, orderTopTenAvg, filterWeaknesses,
} from '../src/data';

const input = [{
  id: 1,
  num: '001',
  name: 'Bulbasaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'Grass',
    'Poison',
  ],
  height: '0.71 m',
  weight: '6.9 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 25,
  egg: '2 km',
  spawn_chance: 0.69,
  avg_spawns: 69,
  spawn_time: '20:00',
  multipliers: [1.58],
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  next_evolution: [{
    num: '002',
    name: 'Ivysaur',
  }, {
    num: '003',
    name: 'Venusaur',
  }],
}, {
  id: 2,
  num: '002',
  name: 'Ivysaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'Grass',
    'Poison',
  ],
  height: '0.99 m',
  weight: '13.0 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 100,
  egg: 'Not in Eggs',
  spawn_chance: 0.042,
  avg_spawns: 4.2,
  spawn_time: '07:00',
  multipliers: [
    1.2,
    1.6,
  ],
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  prev_evolution: [{
    num: '001',
    name: 'Bulbasaur',
  }],
  next_evolution: [{
    num: '003',
    name: 'Venusaur',
  }],
}, {
  id: 3,
  num: '003',
  name: 'Venusaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'Grass',
    'Poison',
  ],
  height: '2.01 m',
  weight: '100.0 kg',
  candy: 'Bulbasaur Candy',
  egg: 'Not in Eggs',
  spawn_chance: 0.017,
  avg_spawns: 1.7,
  spawn_time: '11:30',
  multipliers: null,
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  prev_evolution: [{
    num: '001',
    name: 'Bulbasaur',
  }, {
    num: '002',
    name: 'Ivysaur',
  }],
}];

const output = [{
  id: 1,
  name: 'Bulbasaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'Grass',
    'Poison',
  ],
  avg_spawns: 69,
  candy_count: 25,
  num: '001',
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  next_evolution: [{
    num: '002',
    name: 'Ivysaur',
  }, {
    num: '003',
    name: 'Venusaur',
  }],

}, {
  id: 2,
  name: 'Ivysaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'Grass',
    'Poison',
  ],
  avg_spawns: 4.2,
  candy_count: 100,
  num: '002',
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  prev_evolution: [{
    num: '001',
    name: 'Bulbasaur',
  }],
  next_evolution: [{
    num: '003',
    name: 'Venusaur',
  }],
}, {
  id: 3,
  name: 'Venusaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'Grass',
    'Poison',
  ],
  avg_spawns: 1.7,
  num: '003',
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  prev_evolution: [{
    num: '001',
    name: 'Bulbasaur',
  }, {
    num: '002',
    name: 'Ivysaur',
  }],
}];

const input1 = [
  { name: 'Bulbasaur' },
  { name: 'Ivysaur' },
  { name: 'Venusaur' },
  { name: 'Charmander' },
];

const output1 = [
  { name: 'Bulbasaur' },
  { name: 'Charmander' },
  { name: 'Ivysaur' },
  { name: 'Venusaur' },
];

const output2 = [
  { name: 'Venusaur' },
  { name: 'Ivysaur' },
  { name: 'Charmander' },
  { name: 'Bulbasaur' },
];
/* const output3 = [{
  type: ['Grass', 'Poison'],
  type: ['Grass', 'Poison'],
  type: ['Grass', 'Poison'],
}]; */

const input2 = [
  { avg_spawns: 69 },
  // { spawn_chance: 0.042 },
  { avg_spawns: 1.7 },
  { avg_spawns: 25.3 },
  { avg_spawns: 1.2 },
  // { avg_spawns: 0.31 },
  { avg_spawns: 58 },
  { avg_spawns: 3.4 },
  { avg_spawns: 0.67 },
  { avg_spawns: 303.2 },
  { avg_spawns: 18.7 },
  { avg_spawns: 2.2 },
];

const output3 = [
  { avg_spawns: 303.2 },
  { avg_spawns: 69 },
  { avg_spawns: 58 },
  { avg_spawns: 25.3 },
  { avg_spawns: 18.7 },
  { avg_spawns: 3.4 },
  { avg_spawns: 2.2 },
  { avg_spawns: 1.7 },
  { avg_spawns: 1.2 },
  { avg_spawns: 0.67 },
  // { avg_spawns: 0.31 },
  // { spawn_chance: 0.042 },
];

// Data extraída
describe('traerDataPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof traerDataPokemon).toBe('function');
  });

  it('debería pintar todos los pokemones', () => {
    expect(traerDataPokemon(input)).toEqual(output);
  });
});
// Orden AZ
describe('orderAz', () => {
  it('debería ser una función', () => {
    expect(typeof orderAz).toBe('function');
  });

  it('debería ordenar los nombres de pokemones de A a Z', () => {
    expect(orderAz(input1)).toStrictEqual(output1);
  });
});
// Orden ZA
describe('orderZa', () => {
  it('debería ser una función', () => {
    expect(typeof orderZa).toBe('function');
  });

  it('debería ordenar los nombres de pokemones de Z a A', () => {
    expect(orderZa(input1)).toStrictEqual(output2);
  });
});
// Por tipo
describe('filterType', () => {
  it('debería ser una función', () => {
    expect(typeof filterType).toBe('function');
  });

  it('debería filtrar los pokemones por tipo', () => {
    expect(filterType('Grass', input)[0].type).toEqual(['Grass', 'Poison']);
  });
});
// Top 10 avg
describe('orderTopTenAvg', () => {
  it('debería ser una función', () => {
    expect(typeof orderTopTenAvg).toBe('function');
  });

  it('debería ordenar de mayor a menor los primeros avg_spawns', () => {
    expect(orderTopTenAvg(input2)).toEqual(output3);
  });
});
// Por debilidad
describe('filterWeaknesses', () => {
  it('debería ser una función', () => {
    expect(typeof filterWeaknesses).toBe('function');
  });

  it('debería filtrar los pokemones por debilidad', () => {
    expect(filterWeaknesses('Fire', input)[0].weaknesses).toEqual(['Fire', 'Ice', 'Flying', 'Psychic']);
  });
});
