//API for weather
const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '5119b395647eeaa308f862db7c151afb';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;
const PEXELS_KEY = '563492ad6f91700001000001b7c6868ebea045fc95a38facd09b60a9';

async function getCityImage(location) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('GET', 'POST', 'OPTIONS');
  headers.append('Authorization', PEXELS_KEY)
  return fetch(`${proxy}https://api.pexels.com/v1/search?query=${location}&per_page=5`, {
    methods: 'GET',
    headers: headers,
  })
  .then(res => res.json())
}

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
  getAddress,
  getCityImage
}