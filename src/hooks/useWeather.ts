import { useCallback, useState } from "react";
import type { WeatherResponse } from "../types/weather";
import { fetchWeather } from "../api/weatherApi";

export function useWeather() {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getWeather = useCallback(async (location: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await fetchWeather(location);
            setWeather(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
            setWeather(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { weather, isLoading, error, getWeather };
}