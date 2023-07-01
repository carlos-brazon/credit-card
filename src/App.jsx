import PrintcreditCards from "./components/CreditCard.jsx";
import PrintUserCard from "./components/UserCard.jsx";
import { PrintPokemons } from "./components/Pokemons.jsx"
import { PokemonsAppi } from "./components/PokemonsAppi.js";
import { people } from "./components/People.js";
import ButtonList from "./components/ButtonList.jsx";
import { Countries } from "./components/Countries.jsx";

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
]

function App() {
  return (
    // <div className="contain-card flex">
    //   {persons.map((person, i) => <PrintcreditCards objeto={person} key={i}/>)}      
    // </div>

    // <div className="userCards flex">
    //   {people.map(person => <PrintUserCard person={person} />)}
    // </div>

    // <div className="containCardsPokemons flex">
    //   {PokemonsAppi.map((pokemon, i) => <PrintPokemons pokemon={pokemon} key={i}/>)}
    // </div>

    // <div className="contain-square">
    //   <ButtonList number={31}/>
    // </div>

    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className='font-bold text-5xl'>30 Days of React</h1>
      <p className='text-2xl'>World Population</p>
      <p className="text-xs">Ten most populated countries</p>
      <div className="contain-countries flex flex-col gap-1">
        {countries.map((countrie, i) => <Countries countrie={countrie} key={i} />)}
      </div>
    </div>

  );
}

export default App;
