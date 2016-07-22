"use strict";

//////////////all of these start with app.controller///////////////////
app.controller("ItemListCtrl", function($scope, ItemStorage){
  ItemStorage.getItemList()
  .then(function(itemCollection){
    $scope.items = itemCollection;
  })
});
