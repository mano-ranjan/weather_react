import type { DayData } from "../../../types/weather";
import DailyForecastItem from "./DailyForecastItem";

type DailyForecastProps = {
    days: DayData[];
};

function DailyForecast({
    days,
}: DailyForecastProps) {
    return (
        <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">
                7-Day Forecast
            </h2>

            <div className="space-y-4">
                {days.slice(0, 7).map((day) => (
                    <DailyForecastItem
                        key={day.datetime}
                        day={day}
                    />
                ))}
            </div>
        </div>
    );
}

export default DailyForecast;