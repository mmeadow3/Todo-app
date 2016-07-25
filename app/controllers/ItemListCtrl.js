"use strict";

//////////////all of these start with app.controller///////////////////
app.controller("ItemListCtrl", function($scope, ItemStorage){ //////ItemStorage.getItemList is defined in Item Factory
  function getItems(){ ItemStorage.getItemList()  /////getItem() is now a function that reacts with the FB database
  .then(function(itemCollection){
    $scope.items = itemCollection;  /////now the items = the items from Firebase
  })
}
getItems();

    $scope.deleteItem = function(thingy) {  ///this is described in ItemFactory////
      console.log(thingy);
      ItemStorage.deleteItem(thingy) ///this is deleting from FB database
      .then(function(){
        getItems();
      })
    }

});
