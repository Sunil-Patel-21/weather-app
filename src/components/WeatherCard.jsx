export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>Temperature: {Math.round(data.main.temp)}°C</p>
      <p>Condition: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
}
