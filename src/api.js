import axios from "axios";
import {
  API_KEY,
  API_URL,
  WEATHER_API_URL,
  WEATHER_API_KEY,
} from "./constants/constant.js";

export const fetchLocation = async (query) => {
  const url = `${API_URL}?q=${query}&key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results[0];
};

export const fetchWeather = async (latitude, longitude) => {
  const url = `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};
