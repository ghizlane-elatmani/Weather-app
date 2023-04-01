import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = import.meta.env.VITE_API_KEY;

export async function getCurrentWeather(city, unit) {
  const url = `${baseUrl}?q=${city}&units=${unit}&appid=${apiKey}`;
  const response = await axios.get(url);

  return response.data;
}