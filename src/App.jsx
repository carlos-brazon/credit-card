import PrintcreditCards from "./components/CreditCard.jsx";
import PrintUserCard from "./components/UserCard.jsx";
import { PrintPokemons } from "./components/Pokemons.jsx"
import { PokemonsAppi, persons, countries } from "./components/Arrays.js";
import { people } from "./components/People.js";
import ButtonList from "./components/ButtonList.jsx";
import { Countries } from "./components/Countries.jsx";

function App() {
  return (
    // <div className="contain-card flex">
    //   {persons.map((person, i) => <PrintcreditCards objeto={person} key={i}/>)}      
    // </div>

    // <div className="userCards flex">
    //   {people.map((person, i) => <PrintUserCard person={person} key={i}/>)}
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