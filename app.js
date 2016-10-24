'use strict';

var pike = {
  minHourlyCustomers:23,
  maxHourlyCustomers:65,
  averageCookies:6.3,
  randomNumCustomer: function (){
    Math.floor(Math.random() * maxHourlyCustomers) + minHourlyCustomers;
  },
  cookiesPurchased: randomNumCustomer() * averageCookies,
  results:[],

};

var airport = {
  minHourlyCustomers:3,
  maxHourlyCustomers:24,
  averageCookies:1.2,
  randomNumCustomer: function (){
    Math.floor(Math.random() * maxHourlyCustomers) + minHourlyCustomers;
  },
  cookiesPurchased: randomNumCustomer() * averageCookies,
  results:[],
};

var center = {
  minHourlyCustomers:11,
  maxHourlyCustomers:38,
  averageCookies:3.7,
  randomNumCustomer: function (){
    Math.floor(Math.random() * maxHourlyCustomers) + minHourlyCustomers;
  },
  cookiesPurchased:randomNumCustomer() * averageCookies,
  results:[],
};

var hill = {
  minHourlyCustomers:20,
  maxHourlyCustomers:38,
  averageCookies:2.3,
  randomNumCustomer: function (){
    Math.floor(Math.random() * maxHourlyCustomers) + minHourlyCustomers;
  },
  cookiesPurchased:randomNumCustomer() * averageCookies,
  results:[],
};

var alki = {
  minHourlyCustomers:2,
  maxHourlyCustomers:16,
  averageCookies:4.6,
  randomNumCustomer: function (){
    Math.floor(Math.random() * maxHourlyCustomers) + minHourlyCustomers;
  },
  cookiesPurchased:randomNumCustomer() * averageCookies,
  results:[],
};
