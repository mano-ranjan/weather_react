import React, { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [locationInput, setLocationInput] = useState("");
  const { weather, isLoading, error, getWeather } = useWeather();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (locationInput.trim()) {
      getWeather(locationInput.trim());
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder="Enter a city..."
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.resolvedAddress}</h2>
          <p>{weather.currentConditions.temp}°C — {weather.currentConditions.conditions}</p>
          <p>Wind: {weather.currentConditions.windspeed} km/h</p>
          <p>Rain chance: {weather.currentConditions.precipprob}%</p>
        </div>
      )}
    </div>
  );
}

export default App;