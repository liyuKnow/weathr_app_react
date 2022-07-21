import React,{ useContext } from 'react'
import { CityContext } from '../../context/CityContext'

const Main = () => {
  const { cityWeather } = useContext(CityContext);
  console.log(cityWeather);
  return (
    <>
    {
      cityWeather && (
        <div className='bg-gray-600 mt-8 w-full rounded-[10px]'>
      <div className="px-4 py-2 grid grid-cols-3 gap-4">
        <h1 className='text-6xl text-center p-4 text-gray-900 font-bold'>
          {`${cityWeather.temp.toFixed()} °${cityWeather.unit ? "C" : "F"}`}
        </h1>
        <div className='col-span-2'>
          <h2 className='text-2xl'>{cityWeather.name}, {cityWeather.country}</h2>
          <img src={cityWeather.iconURL} alt={`${cityWeather.name} weather` } />
          <h3 className='text-1xl'>{cityWeather.description}</h3>
        </div>
      </div>
    </div>
      )
    }
    </>
  )
}

export default Main