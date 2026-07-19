import type { HourData } from "../../../types/weather";

type HourlyForecastItemProps = {
    hour: HourData;
};

function HourlyForecastItem({
    hour,
}: HourlyForecastItemProps) {
    return (
        <div className="min-w-[110px] rounded-2xl bg-white p-4 shadow-md">
            <p className="text-center text-sm text-gray-500">
                {hour.datetime.slice(0, 5)}
            </p>

            <div className="my-3 text-center text-3xl">
                ☀️
            </div>

            <p className="text-center text-xl font-semibold">
                {hour.temp}°
            </p>

            <p className="mt-2 text-center text-xs text-gray-500">
                {hour.conditions}
            </p>
        </div>
    );
}

export default HourlyForecastItem;