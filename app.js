'use strict';

function randomCust(min, max){
  var randomCount = Math.floor(Math.random() * (max + 1 - min)) + min;
  // console.log(randomCount);
  return randomCount;
}

/*I want to create a function that will push an array of hoursOpen into an object constructor so i dont have to do it for each store. */
function pushHoursOpen(store){
  for(var i = 1; i < storeObjects.length; i++){
  store.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  }
}

/*I want to take randomCount and multiply it by avgCookie 15 times (for 15 hours) and push the product into the cookiePerHour array within each store object.*/
function perHour(store){
  for(var i = 1; i <= store.hoursOpen.length; i++){
    var cookies = store.cookiePerHour.push(randomCust(store.custMin, store.custMax) * Math.floor(store.avgCookie));
    // console.log(cookies);
  };
  console.log(store.cookiePerHour);
}

var tableEl = document.createElement('table');
document.body.appendChild(tableEl);

function putInHours(){
  var hours = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  var tableRowEl = document.createElement('tr');
  tableEl.appendChild(tableRowEl);

  for(var i = 0; i <= hours.length; i++){
    var tableDataEl = document.createElement('td');
    tableRowEl.appendChild(tableDataEl);
    tableDataEl.textContent = hours[i];
  };
}

// var tableRowEl = document.createElement('tr');
// tableEl.appendChild(tableRowEl);
// tableDataEl.textContent = //I want to put the hoursOpen here...figure out how.

/*I want change the code below so that it creates a table instead of a list. */
function pushToSales(store){
  var tableRowEl = document.createElement('tr');
  tableEl.appendChild(tableRowEl);

  var tableDataEl = document.createElement('td');
  tableRowEl.appendChild(tableDataEl);
  tableDataEl.textContent = store.location;

  for(var i = 0; i < store.hoursOpen.length; i++){
    var tableDataEl = document.createElement('td');
    tableRowEl.appendChild(tableDataEl);
    tableDataEl.textContent = store.cookiePerHour[i];
  };
}

function loopStores(){
  for (var i = 0; i < storeObjects.length; i++){
    allLocations(storeObjects[i]);
  }
}

function allLocations(store){
  pushHoursOpen(store);
  perHour(store);
  pushToSales(store);
}

function locations(location, custMin, custMax, avgCookie, cookiePerHour, hoursOpen){
  this.location = location;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avgCookie = avgCookie;
  this.cookiePerHour = [];
}

var pike = new locations('1st and Pike', 23, 65, 6.3, []);
var seaTac = new locations('SeaTac Airport', 3, 24, 1.2, []);
var seattleCenter = new locations('Seattle Center', 11, 38, 3.7, []);
var capitolHill = new locations('Capitol Hill', 20, 38, 2.3, []);
var alki = new locations('Alki', 2, 16, 4.6, []);

var storeObjects = [pike, seaTac, seattleCenter, capitolHill, alki];
// console.log(storeObjects);

putInHours();
loopStores();
