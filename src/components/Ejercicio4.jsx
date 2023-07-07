import React from 'react'
import { Countries } from './Countries'
import { countries } from './Arrays'

const Ejercicio4 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
    <h1 className='font-bold text-5xl'>30 Days of React</h1>
    <p className='text-2xl'>World Population</p>
    <p className="text-xs">Ten most populated countries</p>
    <div className="contain-countries flex flex-col gap-1">
      {countries.map((countrie, i) => <Countries countrie={countrie} key={i} />)}
    </div>
  </div>
  )
}

export default Ejercicio4