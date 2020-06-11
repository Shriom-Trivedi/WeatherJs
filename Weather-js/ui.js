// http://openweathermap.org/img/wn/10d@2x.png
// data.response.weather[0].icon

class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paintWeather(data) {
    // console.log(data.response.wind);
    this.location.textContent = data.response.name; 
    this.desc.textContent = data.response.weather[0].description;
    this.string.textContent = `${Math.floor(data.response.main.temp - 273.15)}'C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.response.weather[0].icon}@2x.png` )

    this.humidity.textContent = `Relative Humidity: ${data.response.main.humidity}%`;
    this.dewpoint.textContent = `Pressure: ${data.response.main.pressure} hPA`;
    this.feelslike.textContent = `Feelslike: ${Math.floor(data.response.main.feels_like - 273.15)}'C`;
    this.wind.innerText = `Wind: ${data.response.wind.speed} m/s`;


  }
}
