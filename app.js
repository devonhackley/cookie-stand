'use strict';

var pike = {
  minHourlyCustomers:23,
  maxHourlyCustomers:65,
  averageCookies:6.3,
  randomNumCustomer: function (){
    Math.floor(Math.random() * 65) + 23;
  }
  

};
