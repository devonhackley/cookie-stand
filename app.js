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

  //function that returns a random customer amount
  this.randomNumCustomer = function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  };

  //calculates the cookie sales
  this.calcCookiesSales = function () {
    for (var i = 0 ; i < hours.length;i++) {
      this.dailySales[i] = Math.floor(this.randomNumCustomer() * this.averageCookies);
    }
  };

  //attaches the store name to a h2 header
  this.attachStoreName = function () {
    var h2 = document.createElement('h2');
    h2.innerText = (this.name);
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);
  };

  // this.attachStoreList = function () {
  //   var main = document.getElementsByTagName('main')[0];
  //   main.appendChild(ul);
  // };

  //function that generates the amount of cookies needed per hour
  this.createStoreInfo = function () {
    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(ul);
  };

  //function that attaches the total sales to the daily sales
  this.attachStoreSales = function () {
    var ul = document.createElement('ul');
    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      this.totalSales += this.dailySales[i];
    }
    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + this.totalSales + ' cookies';
    ul.appendChild(li);
  };

  //function that creates a row of data for each store
  this.createTableRow = function () {
    var table = document.getElementById('store-data');
    var tr = document.createElement('tr');
    var tBody = document.getElementById('store-body');
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
  };

  this.totalCookies = function () {
    var tr = document.createElement('tr');
    var tBody = document.getElementById('store-body');
    tBody.appendChild(tr);
    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      this.totalSales += this.dailySales[i];
      var td = document.createElement('td');
      td.innerText = this.totalSales;
      tr.appendChild(td);
    }
  };

  this.renderSales = function() {
    //calculate cookies
    this.calcCookiesSales();

    // //attaching store name
    // this.attachStoreName();
    //attaching li to list
    // this.createStoreInfo();
    // //attaching total sales to daily sales
    // this.attachStoreSales();

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
  tHead.appendChild(tr);
};


// create table
createStoreTable();

//function calls
var pike = new Store('1st & Pike',23,65,6.3);
pike.renderSales();
var airport = new Store('SeaTac Airport', 3,24,1.2);
airport.renderSales();
var center = new Store('Seattle Center', 11,38,3.7);
center.renderSales();
var hill = new Store('Capitol Hill', 20,38,2.3);
hill.renderSales();
var alki = new Store('Alki', 2, 16, 4.6);
alki.renderSales();

//array of locations
var locationArray = [pike, airport, center,hill,alki];

//function that creates the total cookie row
var createTotalRow = function () {
  var table = document.getElementById('store-data');
  var tr = document.createElement('tr');
  var tBody = document.getElementById('store-body');
  tBody.appendChild(tr);
  var th = document.createElement('th');
  th.innerText = 'Total: ';
  tr.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    var hourlySales = 0;
    for (var j = 0; j < locationArray.length;  j++) {
      hourlySales += locationArray[j].dailySales[i];
    }
    var td = document.createElement('td');
    td.innerText = hourlySales;
    tr.appendChild(td);
  }

};

//creates the total row
createTotalRow();
