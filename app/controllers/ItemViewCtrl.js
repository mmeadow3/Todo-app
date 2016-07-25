"use strict";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams, FirebaseUrl, $q, $http, $location) {
  $scope.items = [];
  // $scope.selectedItem = {};

$scope.assignedTo = null;
  ItemStorage.getItemList()  //////gets the items from the Factory and populates DOM
  .then(function(itemCollection) {
    $scope.items = itemCollection;
    $scope.selectedItem = $scope.items.filter(function(item) {
      console.log(item.id)
      console.log($routeParams.itemId);
/////////////Edited section///////////

      return item.id === $routeParams.itemId;
    })[0];
  });
  $scope.edit = function(thingy){
    $scope.edited = true;  /////this is referring to ng-show in item-details.html
}

///////////////Save button/////////
  $scope.save = function() {
    let newTask = {
      assignedTo: $scope.assignedTo,
      dependencies: $scope.dependencies ,
      dueDate: $scope.dueDate ,
      isCompleted: $scope.isCompleted, /////just a default////////
      location: $scope.location,
      task: $scope.task,
      urgency: $scope.assignedTo
    }
    // newTask = JSON.stringify(newTask)
    console.log(newTask)

    let thingy = $routeParams;
    thingy = thingy.itemId;
    console.log(`${FirebaseUrl}/items/${thingy}`)
    return $q(function(resolve, reject) {
      $http.put(`${FirebaseUrl}/items/${thingy}.json`, newTask)  ///////dont use stringify with PUT
      .success(function() { ///////dont forget about .success
        resolve();
      })
      .error(function(error) {
        reject(error);
      })
      .then(function(){  /////always put redirects after the competed promise
        $location.url('/items/list');
      })
    });
  };

});
