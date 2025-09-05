export default function ForecastCard({ forecast, unit }) {
  if (!forecast) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
      {forecast.list.slice(0, 5).map((item) => (
        <div key={item.dt} className="p-3 border rounded shadow text-center">
          <p>{item.dt_txt.split(" ")[0]}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="icon"
            className="mx-auto"
          />
          <p>
            {Math.round(item.main.temp)}° {unit === "metric" ? "C" : "F"}
          </p>
          <p>{item.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
}
