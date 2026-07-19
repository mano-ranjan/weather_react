import { useState } from "react";
import { useWeather } from "../hooks/useWeather";

function HomePage() {
    const [locationInput, setLocationInput] = useState("");

    const { weather, isLoading, error, getWeather } = useWeather();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (locationInput.trim()) {
            getWeather(locationInput.trim());
        }
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="mx-auto max-w-5xl p-8">
                <h1 className="mb-8 text-center text-4xl font-bold">
                    Weather App
                </h1>

                <form
                    onSubmit={handleSearch}
                    className="mb-8 flex gap-4"
                >
                    <input
                        className="flex-1 rounded-lg border p-3"
                        type="text"
                        placeholder="Search city..."
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                    />

                    <button
                        className="rounded-lg bg-blue-600 px-6 text-white"
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Search"}
                    </button>
                </form>

                {error && (
                    <p className="mb-4 text-red-600">
                        {error}
                    </p>
                )}

                {weather && (
                    <div className="rounded-xl bg-white p-6 shadow">
                        <h2 className="text-3xl font-semibold">
                            {weather.resolvedAddress}
                        </h2>

                        <p className="mt-2 text-xl">
                            {weather.currentConditions.temp}°C
                        </p>

                        <p>
                            {weather.currentConditions.conditions}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;