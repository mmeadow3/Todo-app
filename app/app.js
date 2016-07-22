"use strict";

var app = angular.module("TodoApp", ['ngRoute'])///////ng-route is installed via bower
.constant('FirebaseUrl', "https://todo-85c17.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {
  ///////FIREBASE////////////////
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };
firebase.initializeApp(authConfig); ////////This is a predefined FB function
///////FIREBASE////////////////

  $routeProvider. ////////This is shwowing the controllers associated with location
  when("/items/list", {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html', ///////goes to new-item form which is HTML
    controller: 'ItemNewCtrl'
  }).
  when('/items/details/:itemId', {  ///////this is calling on the specific FB generated ID
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  }).
  otherwise('/items/list');
});
