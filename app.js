'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


var Stores = function (name, minHourlyCustomers, maxHourlyCustomers,averageCookies) {

  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookies = averageCookies;
  dailySales = [];

  randomNumCustomer: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  }

  calcCookiesSales: function () {
    for (var i = 0 ; i < hours.length;i++) {
      this.dailySales[i] = Math.floor(this.randomNumCustomer() * this.averageCookies);
    }
  }

  renderSales: function() {
    //calculate cookies
    this.calcCookiesSales();

    //attaching store name
    var h2 = document.createElement('h2');
    h2.innerText(this.name);
    var main = document.getElementByTagName('main')[0];
    main.appendChild(h2);

    //attaching li to list
    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }
    //attaching total sales to daily sales
    var totalSales = 0;
    for (var i = 0; i < this.dailySales; i++) {
      totalSales += this.dailySales[i];
    }
    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';

    //Append ul to the dom
    main.appendChild(ul);
  }

}
// var pike = {
//   name:'1st & Pike',
//   minHourlyCustomers:23,
//   maxHourlyCustomers:65,
//   averageCookies:6.3,
//   dailySales:[],
//
//   randomNumCustomer: function (){
//     return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//   },
//
//   calcCookiesSales: function () {
//     for (var i = 0 ; i < hours.length;i++) {
//       this.dailySales[i] = Math.floor(this.randomNumCustomer() * this.averageCookies);
//     }
//   },
//
//   renderSales: function() {
//     //calculate cookies
//     this.calcCookiesSales();
//
//     //attaching store name
//     var h2 = document.createElement('h2');
//     h2.innerText(this.name);
//     var main = document.getElementByTagName('main')[0];
//     main.appendChild(h2);
//
//     //attaching li to list
//     var ul = document.createElement('ul');
//     for (var i = 0; i < hours.length; i++) {
//       var li = document.createElement('li');
//       li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
//       ul.appendChild(li);
//     }
//
//     //attaching total sales to daily sales
//     var totalSales = 0;
//     for (var i = 0; i < this.dailySales; i++) {
//       totalSales += this.dailySales[i];
//     }
//     var li = document.createElement('li');
//     li.innerText = 'Total Sales: ' + totalSales + ' cookies';
//
//     //Append ul to the dom
//     main.appendChild(ul);
//   }
// };
//
// var airport = {
//   name:'seatac-airport',
//   minHourlyCustomers:3,
//   maxHourlyCustomers:24,
//   averageCookies:1.2,
//   dailySales:[],
//
//   randomNumCustomer: function (){
//     return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//   },
//
//   calcCookiesSales: function () {
//     for (var i = 0 ; i < hours.length;i++) {
//       this.dailySales[i] = Math.floor(this.randomNumCustomer() * this.averageCookies);
//     }
//   },
//
//   renderSales: function() {
//     //calculate cookies
//     this.calcCookiesSales();
//
//     //attaching store name
//     var h2 = document.createElement('h2');
//     h2.innerText(this.name);
//     var main = document.getElementByTagName('main')[0];
//     main.appendChild(h2);
//
//     //attaching li to list
//     var ul = document.createElement('ul');
//     for (var i = 0; i < hours.length; i++) {
//       var li = document.createElement('li');
//       li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
//       ul.appendChild(li);
//     }
//     //attaching total sales to daily sales
//     var totalSales = 0;
//     for (var i = 0; i < this.dailySales; i++) {
//       totalSales += this.dailySales[i];
//     }
//     var li = document.createElement('li');
//     li.innerText = 'Total Sales: ' + totalSales + ' cookies';
//
//     //Append ul to the dom
//     main.appendChild(ul);
//   }
// };
//
// var hill = function () {
//   name:'Capitol Hill',
//   minHourlyCustomers:23,
//   maxHourlyCustomers:65,
//   averageCookies:6.3,
//   dailySales:[],
//
//   randomNumCustomer: function (){
//     return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//   },
//
//   calcCookiesSales: function () {
//     for (var i = 0 ; i < hours.length;i++) {
//       this.dailySales[i] = Math.floor(this.randomNumCustomer() * this.averageCookies);
//     }
//   },
//
//   renderSales: function() {
//     //calculate cookies
//     this.calcCookiesSales();
//
//     //attaching store name
//     var h2 = document.createElement('h2');
//     h2.innerText(this.name);
//     var main = document.getElementByTagName('main')[0];
//     main.appendChild(h2);
//
//     //attaching li to list
//     var ul = document.createElement('ul');
//     for (var i = 0; i < hours.length; i++) {
//       var li = document.createElement('li');
//       li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
//       ul.appendChild(li);
//     }
//
//     //attaching total sales to daily sales
//     var totalSales = 0;
//     for (var i = 0; i < this.dailySales; i++) {
//       totalSales += this.dailySales[i];
//     }
//     var li = document.createElement('li');
//     li.innerText = 'Total Sales: ' + totalSales + ' cookies';
//
//     //Append ul to the dom
//     main.appendChild(ul);
//
// }

//adding elements to html using javascript
// var h1 = document.createElement('h1'); //create
// h1.innerText = 'All Cookie Stores'; //add data
// var main = document.getElementByTagName('main')[0]; //attach to new element
// main.appendChild(h1);


//function calls
pike.renderSales();
