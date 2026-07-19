import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import CurrentWeather from "../components/weather/CurrentWeather";
import SearchBar from "../components/weather/SearchBar";
import WeatherDetails from "../components/weather/WeatherDetails";

function HomePage() {
    const [locationInput, setLocationInput] = useState("");

    const weatherState = useWeather();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (locationInput.trim()) {
            weatherState.getWeather(locationInput.trim());
        }
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="mx-auto max-w-5xl p-8">
                <h1 className="mb-8 text-center text-4xl font-bold">
                    Weather App
                </h1>

                <SearchBar
                    value={locationInput}
                    isLoading={weatherState.isLoading}
                    onChange={setLocationInput}
                    onSearch={handleSearch}
                />

                {weatherState.error && (
                    <p className="mb-4 text-red-600">
                        {weatherState.error}
                    </p>
                )}

                {weatherState.weather && (
                    <>
                        <CurrentWeather weather={weatherState.weather} />

                        <WeatherDetails weather={weatherState.weather} />
                    </>
                )}
            </div>
        </div>
    );
}

export default HomePage;