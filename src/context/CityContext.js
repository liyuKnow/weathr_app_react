import { useState, createContext } from 'react';

// create context
export const CityContext = createContext();

// Initial State
const InitialState = "addis ababa";


// create context provider
const CityContextProvider = ({ children }) => {
    const [city, setCity] = useState(InitialState);
    const [cityWeather, setCityWeather] = useState(null);

    const setCityName = (cityName) => {
        setCity((city) => ({
            name: cityName.name,
        }));
    }

    const setWeather = (weatherInfo) => {
        setCityWeather((cityWeather) => ({
            name : weatherInfo.name ,
            temp : weatherInfo.temp ,
            feels_like : weatherInfo.feels_like ,
            temp_min : weatherInfo.temp_min ,
            temp_max : weatherInfo.temp_max ,
            pressure : weatherInfo.pressure ,
            humidity : weatherInfo.humidity ,
            speed : weatherInfo.speed ,
            country : weatherInfo.country ,
            description : weatherInfo.description ,
            iconURL : weatherInfo.iconURL ,
            unit : weatherInfo.unit ,
        }));
    }

    const value = { city, cityWeather, setCityName, setWeather };

    return (
        <CityContext.Provider value={value}>
            {children}
        </CityContext.Provider>
    );
}

// export context provider
export default CityContextProvider;