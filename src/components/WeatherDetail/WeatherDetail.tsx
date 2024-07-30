import { Weather } from "../../hooks/useWeather";

type WeatherDetailProps = {
    weather : Weather
}

export const WeatherDetail = ({weather} : WeatherDetailProps) => {
  return <div>
    <h2>Clima de: {weather.name}</h2>
    <p>{weather.main.temp}</p>
  </div>;
};
