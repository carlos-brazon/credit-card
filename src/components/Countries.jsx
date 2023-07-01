import React from 'react'

export const Countries = ({ countrie: { country, population } }) => {
  
  const numeroPopulation = (Math.round((population/7693165599)*100)).toString()+'%'

  return (
    <div className='flex gap-2'>
      <div className='flex w-[1000px] gap-2'>
        <p className='flex w-48'>
          {country}
        </p>
        <div className='flex truncate rounded w-[800px]'>
        <p className={`flex rounded bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600`} style={{width: `${numeroPopulation}`}}></p>
        </div>
      </div>
      <p className='w-36 text-right'>
        {population.toLocaleString().replaceAll('.', ',')}
      </p>
    </div>
  )
}