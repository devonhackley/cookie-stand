'use strict';
//array of store hours
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//constructor for the store objects
var Store = function (name, minHourlyCustomers, maxHourlyCustomers,averageCookies) {

  //variables
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookies = averageCookies;
  this.dailySales = [];
  this.locationTotals = 0;
  this.locationLog = [];
  //function that returns a random customer amount
  this.randomNumCustomer = function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  };
  //calculates the cookie sales
  this.calcCookiesSales = function () {
    for (var i = 0 ; i < hours.length;i++) {
      this.dailySales[i] = Math.floor(this.randomNumCustomer() * this.averageCookies);
      this.locationTotals += this.dailySales[i];
    }
  };
  //function that creates a row of data for each store
  this.createTableRow = function () {
    var table = document.getElementById('store-data');
    var tr = document.createElement('tr');
    var tBody = document.getElementById('store-body');
    var locationCell = document.createElement('td');
    tBody.appendChild(tr);
    //create table th
    var th = document.createElement('th');
    th.innerText = this.name;
    tr.appendChild(th);
    for (var i = 0; i < this.dailySales.length; i++) {
      var td = document.createElement('td');
      td.innerText = this.dailySales[i];
      tr.appendChild(td);
    }
    // this.totalSalesPerLocation();
    locationCell.innerText = this.locationTotals;
    tr.appendChild(locationCell);
  };
  //this function renders that data to the page
  this.renderSales = function() {
    //calculate cookies
    this.calcCookiesSales();
    // creates the table
    this.createTableRow();
  };
};
//initializes the table for the page
var createStoreTable = function () {
  var main = document.getElementsByTagName('main')[0];
  var table = document.createElement('table');
  table.id = 'store-data';
  main.appendChild(table);

  //create table head
  var tHead = document.createElement('thead');
  table.appendChild(tHead);

  var tBody = document.createElement('tbody');
  tBody.id = 'store-body';
  table.appendChild(tBody);

  //create table tr
  var tr = document.createElement('tr');
  tHead.appendChild(tr);

  //create table th
  var th = document.createElement('th');
  th.innerText = '';
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  }
  var th2 = document.createElement('th');
  th2.innerText = 'Location Totals: ';
  tr.appendChild(th2);
};

createStoreTable();
// //function calls
// var pike = new Store('1st & Pike',23,65,6.3);
// pike.renderSales();
// var airport = new Store('SeaTac Airport', 3,24,1.2);
// airport.renderSales();
// var center = new Store('Seattle Center', 11,38,3.7);
// center.renderSales();
// var hill = new Store('Capitol Hill', 20,38,2.3);
// hill.renderSales();
// var alki = new Store('Alki', 2, 16, 4.6);
// alki.renderSales();
//
// //array of locations
// var locationArray = [pike, airport, center,hill,alki];
var locationArray = [];
var createTotalRow = function () {
  var table = document.getElementById('store-data');
  var tr = document.createElement('tr');
  tr.id = 'total-row';
  var tBody = document.getElementById('store-body');
  tBody.appendChild(tr);
  var th = document.createElement('th');
  th.innerText = 'Total: ';
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    var hourlySales = 0;
    var hourlyLocationTotal = 0;
    for (var j = 0; j < locationArray.length; j++) {
      hourlySales += locationArray[j].dailySales[i];
      //hourlyLocationTotal += locationTotals;
    }
    var td = document.createElement('td');
    td.innerText = hourlySales;
    tr.appendChild(td);

  }
};
var createCompleteTotal = function () {
  var totalRow = document.getElementById('total-row');
  var totalSales = 0;
  for (var i = 1; i < totalRow.children.length; i++){
    var td = totalRow.children[i];
    var number = parseInt(td.innerText);
    totalSales += number;
  }
  var td = document.createElement('td');
  td.innerText = totalSales;
  totalRow.appendChild(td);
};
//creates the total row
// Start of Event Code

var form = document.getElementById('getCookieSalesPerDay');
function cookieSalesFormSubmitHandler(event) {
  event.preventDefault();
  // var name = event.target[name].value;
  var name = event.target.name.value;
  var minHourlyCustomers = event.target.minHourlyCustomers.value;
  var maxHourlyCustomers = event.target.maxHourlyCustomers.value;
  var averageCookies = event.target.averageCookies.value;
  var tBody = document.getElementById('store-body');

  var store = new Store(name,minHourlyCustomers,maxHourlyCustomers,averageCookies);

  locationArray.push(store);
  tBody.innerHTML = '';
  for (var i = 0; i < locationArray.length; i++){
    locationArray[i].renderSales();
  };
  createTotalRow();
  createCompleteTotal();
}
form.addEventListener('submit', cookieSalesFormSubmitHandler);
