"use strict";

//////////this what populates the NavBar/////////////
app.controller("NavCtrl", function ($scope, AuthFactory) {  ////makes a call to AuthFactory.js


  $scope.navItems = [////////the urls are directing to different parts of the page
    {name: "All Items", url: "#/items/list"},
    {name: "New Items", url: "#/items/new"},
    {name: "Register", url: "#/items/register"}
  ];  ///////anthing that is defined on scope is alavilable to view
  $scope.currentUser = null;
  $scope.submit = function(){
    console.log($scope.email);
    firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
    .then( function(user){   ///////////Returning promises
      $scope.currentUser = user;
      console.log(user);
    })
  }
//////////This is refrencing AuthFactory and is capitalized bc that is what is defined in AuthFactory.js
  $scope.login = AuthFactory.authWithProvider  /////also is the ng-click event for html
/////////////This will login in with google////////////////

// $scope.login = (function(thingy){
//   $scope.edited = true;
// })    ////////why isnt this working????????

  /////////Logout function/////////////
  $scope.logout = function(){
    firebase.auth().signOut()
    .then(function(user){   ///////////Returning promises
      console.log(user);  //////will be undefined bc they have logged out
    }).
    then(function(){
      $scope.loggedOut = true;  ///////working but now needs to to reappear when user signs in
    })
  }
});
