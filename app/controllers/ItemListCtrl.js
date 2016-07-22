"use strict";

//////////////all of these start with app.controller///////////////////
app.controller("ItemListCtrl", function($scope, ItemStorage){
  function getItems(){ ItemStorage.getItemList()
  .then(function(itemCollection){
    // console.log('test', itemCollection);
    $scope.items = itemCollection;
  })
}
getItems();

    $scope.deleteItem = function(thingy) {
      console.log(thingy);
      ItemStorage.deleteItem(thingy)
      .then(function(){
        getItems();
      })
    }

});
