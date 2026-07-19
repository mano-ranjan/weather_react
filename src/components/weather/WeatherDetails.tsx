import type { WeatherResponse } from "../../types/weather";
import WeatherInfoCard from "./WeatherInfoCard";

type WeatherDetailsProps = {
    weather: WeatherResponse;
};

function WeatherDetails({
    weather,
}: WeatherDetailsProps) {
    return (
        <div className="mt-8">

            <h2 className="mb-4 text-2xl font-bold">
                Weather Details
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                {/* <WeatherInfoCard
                    icon="💧"
                    title="Humidity"
                    value={`${weather.currentConditions.humidity}%`}
                /> */}

                <WeatherInfoCard
                    icon="🌬"
                    title="Wind"
                    value={`${weather.currentConditions.windspeed} km/h`}
                />

                <WeatherInfoCard
                    icon="🌧"
                    title="Rain"
                    value={`${weather.currentConditions.precipprob}%`}
                />

                <WeatherInfoCard
                    icon="🌡"
                    title="Temperature"
                    value={`${weather.currentConditions.temp}°C`}
                />

            </div>

        </div>
    );
}

export default WeatherDetails;