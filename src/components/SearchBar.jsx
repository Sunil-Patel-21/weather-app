import { useState } from "react";

export default function SearchBar({ onSearch, onUnitChange, unit }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-2 rounded"
      >
        Search
      </button>

      <select
        value={unit}
        onChange={(e) => onUnitChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="metric">Celsius (°C)</option>
        <option value="imperial">Fahrenheit (°F)</option>
      </select>
    </form>
  );
}
