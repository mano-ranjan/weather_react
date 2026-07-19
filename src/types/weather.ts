export interface HourData {
    datetime: string;
    temp: number;
    conditions: string;
    windspeed: number;
    precipprob: number;
}

export interface DayData {
    datetime: string;
    temp: number;
    conditions: string;
    hours: HourData[];
}

export interface WeatherResponse {
    resolvedAddress: string;
    days: DayData[];
    currentConditions: {
        temp: number;
        conditions: string;
        windspeed: number;
        precipprob: number;
    }
}