import axios from 'axios';

// API key and format from openweathermap.org
const API_KEY = '83a5f58152c31776f45da4292b4ac3b4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // we assume all searches are with country code 'us'
    const url = `${ROOT_URL}&q=${city},us`;

    // note, axios.get returns a promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
