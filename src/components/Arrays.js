const PokemonsAppi = [
	{ id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
	{ id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
	{ id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
	{ id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
	{ id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
	{ id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
	{ id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
	{ id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
	{ id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
	{ id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
	{ id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
	{ id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
	{ id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
	{ id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
	{ id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
	{ id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
	{ id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
	{ id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
	{ id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
	{ id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
];
const persons = [
	{
	  cssClass: '',
	  type: 'master',
	  number: (Math.floor(Math.random() * (10 ** 16 - 10 ** 15 + 1) + 10 ** 15)).toString(),
	  expirationMonth: Math.ceil(Math.random() * 12),
	  expirationYear: (new Date().getFullYear() + 5).toString().slice(2),
	  bank: 'BBVA',
	  owner: 'CARLOS BRAZON'
	},
	{
	  cssClass: 'gold',
	  type: 'master',
	  number: (Math.floor(Math.random() * (10 ** 16 - 10 ** 15 + 1) + 10 ** 15)).toString(),
	  expirationMonth: Math.ceil(Math.random() * 12),
	  expirationYear: (new Date().getFullYear() + 5).toString().slice(2),
	  bank: 'ING',
	  owner: 'CARLOS MANUEL'
	},
	{
	  cssClass: 'aliceblue',
	  type: 'visa',
	  number: (Math.floor(Math.random() * (10 ** 16 - 10 ** 15 + 1) + 10 ** 15)).toString(),
	  expirationMonth: Math.ceil(Math.random() * 12),
	  expirationYear: (new Date().getFullYear() + 5).toString().slice(2),
	  bank: 'CAIXA',
	  owner: 'CARLOS DIAZ'
	}
  ]
  const countries = [
	{ country: 'World', population: 7693165599 },
	{ country: 'China', population: 1377422166 },
	{ country: 'India', population: 1295210000 },
	{ country: 'United States of America', population: 323947000 },
	{ country: 'Indonesia', population: 258705000 },
	{ country: 'Brazil', population: 206135893 },
	{ country: 'Pakistan', population: 194125062 },
	{ country: 'Nigeria', population: 186988000 },
	{ country: 'Bangladesh', population: 161006790 },
	{ country: 'Russian Federation', population: 146599183 },
	{ country: 'Japan', population: 126960000 },
	{ country: 'Spain', population: 48196693 },
  ]

export { PokemonsAppi, persons, countries }