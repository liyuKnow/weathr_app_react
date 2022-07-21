import React,{ useContext } from 'react'
import { CityContext } from '../../context/CityContext'
import InfoCard from './InfoCard'
import {BsWind, BsArrowDownLeftSquare , BsArrowUpLeftSquare} from 'react-icons/bs'
import {GiThermometerCold} from 'react-icons/gi';
import {FaCompressArrowsAlt, FaHandHoldingWater} from 'react-icons/fa'

const Info = () => {
  const { cityWeather } = useContext(CityContext);
  return (
    <div className='mt-8 w-full rounded-[10px]'>
      {
      cityWeather && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <InfoCard icon={<BsArrowDownLeftSquare size={'3rem'} />} title="Min" info={cityWeather.temp_min}/>
          <InfoCard icon={<BsArrowUpLeftSquare size={'3rem'} />} title="Max" info={cityWeather.temp_max}/>
          <InfoCard icon={<GiThermometerCold size={'3rem'} />} title="Feels Like" info={cityWeather.feels_like}/>
          <InfoCard icon={<FaCompressArrowsAlt size={'3rem'} />} title="Pressure" info={cityWeather.pressure}/>
          <InfoCard icon={<FaHandHoldingWater size={'3rem'} />} title="Humidity" info={cityWeather.humidity}/>
          <InfoCard icon={<BsWind size={'3rem'} />} title="Wind Speed" info={cityWeather.speed}/>
        </div>
        )
      }
    </div>
  )
}

export default Info