import React from 'react'
import { ButtonPokemon } from "./Button";

export const PrintPokemons = ({pokemon:{name, img, id}}) => {
  return (
    <div className='cardPokemon flex'>
        <h3>{id}</h3>
        <img src={img} alt="aquí va una imagen de un pokemon" />
        <p>{name}</p>
        {<ButtonPokemon name={name}/>}
    </div>
  );
}
