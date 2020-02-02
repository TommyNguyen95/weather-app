const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '5119b395647eeaa308f862db7c151afb';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

async function getWeather(lat, lng) {
  return fetch(`${API_URL}${lat},${lng}?lang=sv&units=si`)
    .then(res => res.json())
}

async function getCordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(res => res.json());
}

async function getAddress(lat, lng) {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
    .then(res => res.json());
}

export default {
  getWeather,
  getCordinates,
  getAddress
}