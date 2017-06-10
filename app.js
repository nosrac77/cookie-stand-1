'use strict';

function randomCust(min, max){
  var randomCount = Math.floor(Math.random() * (max + 1 - min)) + min;
  // console.log(randomCount);
  return randomCount;
}

/*I want to take randomCount and multiply it by avgCookie 15 times (for 15 hours) and push the product into the cookiePerHour array within each store object.*/
function perHour(store){
  for(var i = 1; i <= store.hoursopen.length; i++){
    var cookies = store.cookiePerHour.push(randomCust(store.custMin, store.custMax) * Math.floor(store.avgCookie));
    // console.log(cookies);
  };
  console.log(store.cookiePerHour);
}

/*I want to get the <ul> element on my sales.html page by ID and push the array I just made in each of my stores into an unordered list on the browser */
// function();?
function pushToSales(store){
  var unorderedListEl = document.getElementById('cookieSales');
  for(var i = 0; i < store.hoursopen.length; i++){
    var listItemEl = document.createElement('li');
    unorderedListEl.appendChild(listItemEl);
    listItemEl.textContent = store.cookiePerHour[i];
  };
}

// function allLocations(store){
//   perHour(store);
//   pushToSales(store);
// }

var pike = {
  custMin: 23,
  custMax: 65,
  avgCookie: 6.3,
  cookiePerHour: [],
  hoursopen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
};

var seaTac = {
  custMin: 3,
  custMax: 24,
  avgCookie: 1.2,
  cookiePerHour: [],
  hoursopen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
}

var seattleCenter = {
  custMin: 11,
  custMax: 38,
  avgCookie: 3.7,
  cookiePerHour: [],
  hoursopen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
};

var capitolHill = {
  custMin: 20,
  custMax: 38,
  avgCookie: 2.3,
  cookiePerHour: [],
  hoursopen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
};

var alki = {
  custMin: 2,
  custMax: 16,
  avgCookie: 4.6,
  cookiePerHour: [],
  hoursopen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
};

perHour(pike);
pushToSales(pike);
