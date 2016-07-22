"use strict";

//////////this what populates the NavBar/////////////

app.controller("NavCtrl", function ($scope){
  $scope.navItems = [
    {name: "Logout", url: "#/logout"},////////the urls are directing to different parts of the page
    {name: "All Items", url: "#/items/list"},
    {name: "New Items", url: "#/items/new"}
  ];
});   ///////anthing that is defined on scope is alavilable to view
