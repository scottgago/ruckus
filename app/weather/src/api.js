const rootUrl= 'http://api.openweathermap.org/data/2.5/weather?APPID=0f646b67c88293c9cc1b650eed9df884'
var kelvinToF= function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F';
}
export default function fetchWeather (longitude, latitude) {
  var url= `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  return fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    })
}