class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Pune';
    
  }
  
  getLocation() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    }else {
      this.city = localStorage.getItem('city');
      // console.log(defaultCity);
    }

    return {
      city: this.city
    }
  }

  setLocation(city) {
    localStorage.setItem('city',city);
  }
}