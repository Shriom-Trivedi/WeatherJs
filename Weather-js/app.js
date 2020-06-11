//instantiate storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocation();
//instantiate Weather
const weather = new Weather(weatherLocation.city);
// console.log(weatherLocation);


//instantiate UI class
const ui = new UI();
//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // console.log(city);

  //change location
  weather.changeLocation(city);

  //set location in local storage
  storage.setLocation(city)

  // get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');

});

function getWeather() {
weather.getWeather()
.then(data => {
  // console.log(data)
  ui.paintWeather(data);
})
.catch(err => console.log(err));
}