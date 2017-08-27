import axios from 'axios';

const API_KEY = '3ccb1cfe4a63e02262ac3dcf2290bc04';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city)=>{
   const url = `${ROOT_URL}&q=${city},in`;
   const request = axios.get(url);
   return{
     type : FETCH_WEATHER,
     payload : request
   }
}
