"use strict";

var app = angular.module("TodoApp", ['ngRoute'])///////empty brackets bc there are no dependencies at the moment
.constant('FirebaseUrl', "https://todo-85c17.firebaseio.com/");


app.config(function($routeProvider, FBCreds) {
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };
firebase.initializeApp(authConfig);

  $routeProvider.
  when("/items/list", {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller: 'ItemNewCtrl'
  }).
  when('/items/details/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  }).
  otherwise('/items/list');
});
