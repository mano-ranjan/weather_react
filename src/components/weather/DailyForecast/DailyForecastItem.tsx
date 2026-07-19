import type { DayData } from "../../../types/weather";

type DailyForecastItemProps = {
    day: DayData;
};

function DailyForecastItem({
    day,
}: DailyForecastItemProps) {
    return (
        <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-md">
            <div>
                <p className="font-semibold">
                    {day.datetime}
                </p>

                <p className="text-sm text-gray-500">
                    {day.conditions}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-2xl">
                    🌤️
                </span>

                <p className="font-semibold">
                    {day.temp}°
                </p>
            </div>
        </div>
    );
}

export default DailyForecastItem;