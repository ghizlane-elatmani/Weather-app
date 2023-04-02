import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = import.meta.env.VITE_API_KEY;

export async function getCurrentWeatherByCity(city, unit) {
  const url = `${baseUrl}/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  const response = await axios.get(url);

  return response.data;
}

export async function getCurrentWeatherByLocation(lat, lon, unit) {
  const url = `${baseUrl}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
  const response = await axios.get(url);

  return response.data;
}

export async function get5DaysWeatherForecastByCity(city, unit) {
  const url = `${baseUrl}/forecast/daily?q=${city}&units=${unit}&appid=${apiKey}`;
  const response = await axios.get(url);

  return response.data;
}

export async function get5DaysWeatherForecastByLocation(lat, lon, unit) {
  const url = `${baseUrl}/forecast/daily?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
  const response = await axios.get(url);

  return response.data;
}
