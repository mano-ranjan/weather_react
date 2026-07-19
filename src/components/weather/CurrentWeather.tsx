import type { WeatherResponse } from "../../types/weather";

type CurrentWeatherProps = {
    weather: WeatherResponse;
};

function CurrentWeather({
    weather,
}: CurrentWeatherProps) {
    return (
        <div className="rounded-2xl bg-white p-8 shadow-md">

            <h2 className="text-3xl font-bold">
                {weather.resolvedAddress}
            </h2>

            <p className="mt-4 text-6xl font-light">
                {weather.currentConditions.temp}°
            </p>

            <p className="mt-2 text-xl text-gray-600">
                {weather.currentConditions.conditions}
            </p>

        </div>
    );
}

export default CurrentWeather;