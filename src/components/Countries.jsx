import React from 'react'

export const Countries = ({ countrie: { country, population } }) => {
  const numeroPopulation = []
  for (let i = 0; i < population; i += 10000000) {
    numeroPopulation.push(<p className='bg-yellow-500 w-px flex'></p>)
  }

  return (
    <div className='flex gap-2'>
      <div className='flex w-[1000px] gap-2'>
        <p className='flex w-48'>
          {country}
        </p>
        <div className='flex truncate rounded'>
          {numeroPopulation}
        </div>
      </div>
      <p className='w-40 flex'>
        {population.toLocaleString().replaceAll('.', ',')}
      </p>
    </div>
  )
}
