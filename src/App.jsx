import PrintcreditCards from "./components/CreditCard.jsx";
import PrintUserCard from "./components/UserCard.jsx";
import { people } from "./components/People.js";
import { PrintPokemons } from "./components/Pokemons.jsx"
import { PokemonsAppi, persons, countries } from "./components/Arrays.js";
import ButtonList from "./components/ButtonList.jsx";
import Ejercicio4 from "./components/Ejercicio4.jsx";

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

      // <ButtonList number={31}/>

    <Ejercicio4 />

  );
}

export default App;