'use strict';

var pike = {
  custMin: 23,
  custMax: 65,
  avgCookie: 6.3,
  cookiePerHour: []
};

function randomCust(custMin, custMax){
  var randomCount = Math.floor(Math.random() * (custMax - custMin)) + custMin;
  // console.log(randomCount);
  return randomCount;
}

/*I want to take randomCount and multiply it by avgCookie 15 times (for 15 hours) and push the product into the cookiePerHour array within each store object.*/
for(var i = 1; i <= 15; i++){
  var cookies = pike.cookiePerHour.push(randomCust(pike.custMin, pike.custMax) * Math.floor(pike.avgCookie));
  // console.log(cookies);
}
console.log(pike.cookiePerHour);

/*I want to get the <ul> element on my sales.html page by ID and push the array I just made in each of my stores into an unordered list on the browser */
// function();?


var seaTac = {
  custMin: 3,
  custMax: 24,
  avgCookie: 1.2,
  cookiePerHour: []
}

function randomCust(custMin, custMax){
  var randomCount = Math.floor(Math.random() * (custMax - custMin)) + custMin;
  // console.log(randomCount);
  return randomCount;
}

for(var i = 1; i <= 15; i++){
  var cookies = seaTac.cookiePerHour.push(randomCust(seaTac.custMin, seaTac.custMax) * Math.floor(seaTac.avgCookie));
  // console.log(cookies);
}
console.log(seaTac.cookiePerHour);

var seattleCenter = {
  custMin: 11,
  custMax: 38,
  avgCookie: 3.7,
  cookiePerHour: []
};

function randomCust(custMin, custMax){
  var randomCount = Math.floor(Math.random() * (custMax - custMin)) + custMin;
  // console.log(randomCount);
  return randomCount;
}

for(var i = 1; i <= 15; i++){
  var cookies = seattleCenter.cookiePerHour.push(randomCust(seattleCenter.custMin, seattleCenter.custMax) * Math.floor(seattleCenter.avgCookie));
  // console.log(cookies);
}
console.log(seattleCenter.cookiePerHour);

var capitolHill = {
  custMin: 20,
  custMax: 38,
  avgCookie: 2.3,
  cookiePerHour: []
};

function randomCust(custMin, custMax){
  var randomCount = Math.floor(Math.random() * (custMax - custMin)) + custMin;
  // console.log(randomCount);
  return randomCount;
}

for(var i = 1; i <= 15; i++){
  var cookies = capitolHill.cookiePerHour.push(randomCust(capitolHill.custMin, capitolHill.custMax) * Math.floor(capitolHill.avgCookie));
  // console.log(cookies);
}
console.log(capitolHill.cookiePerHour);

var alki = {
  custMin: 2,
  custMax: 16,
  avgCookie: 4.6,
  cookiePerHour: []
};

function randomCust(custMin, custMax){
  var randomCount = Math.floor(Math.random() * (custMax - custMin)) + custMin;
  // console.log(randomCount);
  return randomCount;
}

for(var i = 1; i <= 15; i++){
  var cookies = alki.cookiePerHour.push(randomCust(alki.custMin, alki.custMax) * Math.floor(alki.avgCookie));
  // console.log(cookies);
}
console.log(alki.cookiePerHour);
