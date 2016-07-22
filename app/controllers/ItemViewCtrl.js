"use strict";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams) {
  $scope.items = [];
  // $scope.selectedItem = {};

  ItemStorage.getItemList()
  .then(function(itemCollection) {
    $scope.items = itemCollection;
    $scope.selectedItem = $scope.items.filter(function(item) {
      console.log(item.id)
      console.log($routeParams.itemId);

      return item.id === $routeParams.itemId;
    })[0];
  });
});
