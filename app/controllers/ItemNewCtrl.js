"use strict";


app.controller("ItemNewCtrl", function($scope, ItemStorage, $location) {  ///////Item storage is from ItemFactory
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false, /////just a default////////
    location: "",
    task: "",
    urgency: ""
  };


    $scope.addNewItem = function(){  ///////this is the ng-click defined in item-new.html
      console.log("added new item", $scope.newTask);  //////this returns an obejct that was just created
      ItemStorage.postNewItem($scope.newTask) /////This is a call to the Item Factory with the post AJAX call to FB
      .then(function(){     ///////must resolve the promise
        $location.url('/items/list'); ///////this then returns to the list view//////
      })
    }
});
