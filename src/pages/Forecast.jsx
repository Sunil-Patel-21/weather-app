import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ForecastCard from "../components/ForecastCard";
import Spinner from "../components/Spinner";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Forecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchForecast = async (city) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );
      setForecast(res.data);
    } catch (err) {
      alert("City not found or network error");
      console.log(err);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">5-Day Forecast</h1>
      <SearchBar onSearch={fetchForecast} />
      {loading ? (
        <p className="text-gray-500 mt-4"><Spinner /></p>
      ) : (
        <ForecastCard forecast={forecast} />
      )}
    </div>
   );
}
