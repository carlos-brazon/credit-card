import React from 'react'

export const Countries = ({ countrie: { country, population } }) => {
  
  const numeroPopulation = Math.round((population/7693165599)*100);

  return (
    <div className='flex gap-2'>
      <div className='flex w-[1000px] gap-2'>
        <p className='flex w-48'>
          {country}
        </p>
        <div className='flex truncate rounded w-[800px]'>
        <p className={`bg-yellow-500 flex`} style={{width:numeroPopulation+'%'}}></p>
        </div>
      </div>
      <p className='w-40 flex'>
        {population.toLocaleString().replaceAll('.', ',')}
      </p>
    </div>
  )
}
