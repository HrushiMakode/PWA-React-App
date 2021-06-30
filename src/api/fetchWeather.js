import axios from "axios";

const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const fetchWeather = async (query) => {
  const { data } = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${API_KEY}`
    )
    .catch((err) => console.error(err));
  return data;
};

export default fetchWeather;
