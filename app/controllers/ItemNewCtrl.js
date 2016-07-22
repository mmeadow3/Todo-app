"use strict";


app.controller("ItemNewCtrl", function($scope, ItemStorage, $location) {
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: ""
  };


    $scope.addNewItem = function(){
      console.log("added new item", $scope.newTask);
      ItemStorage.postNewItem($scope.newTask)
      .then(function(){     ///////must resolve the promise
        $location.url('/items/list');
      })
    }
});
