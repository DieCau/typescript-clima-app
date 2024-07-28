// import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appId = '084f97fa488bfb774b4b994e080c0240'
    try {
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
        console.log(geoUrl);
                
    
    } catch (error) {
        console.log(error);                
    }
  };
  return {
    fetchWeather,
  };
}