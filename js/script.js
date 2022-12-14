import { getWeatherDta } from "./api.js";


const app = async () => {
    const weather = getWeatherDta('Москва');
    console.log(weather);
}

app()