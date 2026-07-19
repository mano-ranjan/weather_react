import type { WeatherResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export async function fetchWeather(location: string) {
    const url = `${BASE_URL}/${encodeURIComponent(location)}?key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Weather fetch failed: ${response.status}`);
    }

    return response.json() as Promise<WeatherResponse>;
}