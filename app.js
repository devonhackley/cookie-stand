'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Store = function (name, minHourlyCustomers, maxHourlyCustomers,averageCookies) {

  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookies = averageCookies;
  this.dailySales = [];

  this.randomNumCustomer = function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  };

  this.calcCookiesSales = function () {
    for (var i = 0 ; i < hours.length;i++) {
      this.dailySales[i] = Math.floor(this.randomNumCustomer() * this.averageCookies);
    }
  };

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

  this.attachStoreSales = function () {
    var totalSales = 0;
    for (var i = 0; i < this.dailySales; i++) {
      totalSales += this.dailySales[i];
    }
    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
  };

  this.renderSales = function() {
    //calculate cookies
    this.calcCookiesSales();

    //attaching store name
    this.attachStoreName();

    //attaching li to list
    this.createStoreInfo();

    //attaching total sales to daily sales
    this.attachStoreSales();

    // this.main.appendChild(ul);

  };

};

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
