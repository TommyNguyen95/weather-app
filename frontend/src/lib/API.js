const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '5119b395647eeaa308f862db7c151afb';
const location = '37.8267,-122.4233';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

function getWeather() {
  return fetch(API_URL)
    .then(res => res.json());
}

export default {
  getWeather
}