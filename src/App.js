import "./styles.css";
import { fetchWeather } from "./api/fetchWeather";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query).catch((err) => console.log(err));
      setWeather(data);
      setQuery("");
      console.log(data);
    }
  };

  return (
    <div className="main-container">
      <h2>Type Any City</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search"
        placeholder="Search..."
        onKeyPress={search}
      />
      {weather?.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg; C</sup>
          </div>
          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="city-icon"
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
