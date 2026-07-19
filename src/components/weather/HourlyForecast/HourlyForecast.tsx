import type { DayData } from "../../../types/weather";
import HourlyForecastItem from "./HourlyForecastItem";

type HourlyForecastProps = {
    day: DayData;
};

function HourlyForecast({
    day,
}: HourlyForecastProps) {
    return (
        <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">
                Hourly Forecast
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-2">
                {day.hours.slice(0, 24).map((hour) => (
                    <HourlyForecastItem
                        key={hour.datetime}
                        hour={hour}
                    />
                ))}
            </div>
        </div>
    );
}

export default HourlyForecast;