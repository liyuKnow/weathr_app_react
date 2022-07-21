import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {GrLocation, } from 'react-icons/gr';
import {RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri';
import { useContext } from "react";
import {CityContext} from '../../context/CityContext';



const API_KEY = "f108f4adb253faa49fe23d5f3cbdf504";

const Navbar = () => {
  const { setWeather } = useContext(CityContext)

  const [query, setQuery] = useState('addis ababa');
  const [metric, setMetric] = useState(true);

  const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${metric ? 'metric' : 'imperial'}`);
        const {
          weather,
          main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
          wind: { speed },
          sys: { country },
          name,
        } = res.data;

        const { description, icon } = weather[0];

        
        const iconURL = makeIconURL(icon);

        const units = metric ? true : false;

        const weatherInfo = {
          temp,
          feels_like,
          temp_min,
          temp_max,
          pressure,
          humidity,
          speed,
          country,
          description,
          iconURL,
          name,
          unit : units
        }

        setWeather(weatherInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getWeather();
  },[query, metric]);
  return (
        <div className='bg-gray-600 mt-4 w-full rounded-[10px]'>
        <div className="relative text-gray-600 focus-within:text-gray-400 flex justify-between px-4 py-4 items-center">
            <span className="absolute inset-y-2 left-4 flex items-center pl-2 text-gray-500">
                <GrLocation className="w-6 h-6 cursor-pointer" style={{color:'#6b7280'}} onClick={()=> alert("Add Location")} />
                {/* <GrLocation className="w-6 h-6 cursor-pointer" style={{color:'#6b7280'}} onClick={()=> alert("Add Location")} /> */}
            </span>
            <input 
                type="search" 
                className="py-2 px-4 w-1/2 text-lg bg-gray-400 text-gray-700 rounded-md pl-10 focus:outline-none focus:bg-gray-500 focus:text-gray-900" 
                placeholder="Search..." 
                autoComplete="off"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
            />
             <button className='text-gray-900 bg-gray-400 rounded px-4 py-2 font-medium' onClick={() => setMetric(!metric)}>{ metric ? <RiCelsiusFill /> : <RiFahrenheitFill /> }</button>
        </div>
    </div>
  )
}

export default Navbar