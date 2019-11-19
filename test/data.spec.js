/* eslint-disable no-dupe-keys */
// importamos la función `example`
import {
  traerDataPokemon, pokedata, pokedata2, pokedata3,
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
}, {
  id: 2,
  name: 'Ivysaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'Grass',
    'Poison',
  ],
  avg_spawns: 4.2,
}, {
  id: 3,
  name: 'Venusaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'Grass',
    'Poison',
  ],
  avg_spawns: 1.7,
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
const output3 = [{
  type: ['Grass', 'Poison'],
  type: ['Grass', 'Poison'],
  type: ['Grass', 'Poison'],
}];

// Data extraída
describe('traerDataPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof traerDataPokemon).toBe('function');
  });

  it('debería pintar todos los pokemones', () => {
    expect(traerDataPokemon(input)).toStrictEqual(output);
  });
});
// Orden AZ
describe('pokedata', () => {
  it('debería ser una función', () => {
    expect(typeof pokedata).toBe('function');
  });

  it('debería ordenar los nombres de pokemones de A a Z', () => {
    expect(pokedata(input1)).toStrictEqual(output1);
  });
});
// Orden ZA
describe('pokedata2', () => {
  it('debería ser una función', () => {
    expect(typeof pokedata2).toBe('function');
  });

  it('debería ordenar los nombres de pokemones de Z a A', () => {
    expect(pokedata2(input1)).toStrictEqual(output2);
  });
});
// Por tipo
describe('pokedata3', () => {
  it('debería ser una función', () => {
    expect(typeof pokedata3).toBe('function');
  });

  it('debería filtrar los pokemones por tipo', () => {
    expect(pokedata3(input)).toStrictEqual(output3);
  });
});
