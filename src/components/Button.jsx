import React from 'react'

export const ButtonPokemon = ({ name }) => {

  const handleClick = (event => {
    console.log(name);
  })

  return (
    <button className='bg-blue-400' onClick={handleClick}>{name}</button>
  )
}

export const ButtonsCreated = ({ numero }) => {


  const esPrimo = numero => {
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i == 0) return false;
    }
    return true;
  }
  
  return (
    <button onClick={() => console.log(numero)} className={`p-4 w-24 h-24 ${esPrimo(numero) ? 'bg-red-500' : numero % 2 === 0 ? 'bg-green-500' :  'bg-yellow-500'}`}> {numero}</button>
  )
}
