//api key: http://api.openweathermap.org/data/2.5/weather?q=pune&appid=32097eb6cb8f0fc3c77c144be4a3dddc

class Weather {
  constructor(city) { 
    this.apiKey = '32097eb6cb8f0fc3c77c144be4a3dddc';
    this.city = city;
  }

 async getWeather(user) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const response = await weatherResponse.json();

    return {
      response
    }
  }

  changeLocation(city) {
    this.city = city;
  }
}