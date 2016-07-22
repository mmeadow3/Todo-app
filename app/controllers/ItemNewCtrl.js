"use strict";


app.controller("ItemNewCtrl", function($scope, ItemStorage, $location) {
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
      console.log("added new item", $scope.newTask);
      ItemStorage.postNewItem($scope.newTask)
      .then(function(){     ///////must resolve the promise
        $location.url('/items/list'); ///////this then returns to the list view//////
      })
    }
});
