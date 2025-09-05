import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import WeatherCard from "../components/WeatherCard";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric"); 

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: unit,
          },
        }
      );
      setWeather(res.data);
    } catch (err) {
      alert("City not found or network error");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <SearchBar
        onSearch={fetchWeather}
        onUnitChange={setUnit}
        unit={unit}
      />
      {loading ? (
        <p className="text-gray-500 mt-4"><Spinner /></p>
      ) : (
        <WeatherCard data={weather} unit={unit} />
      )}
    </div>
  );
}
