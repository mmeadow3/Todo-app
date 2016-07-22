"use strict";

//////////this what populates the NavBar/////////////
app.controller("NavCtrl", function ($scope, AuthFactory) {

  // let provider = new firebase.auth.GoogleAuthProvider();
  //
  // function login (provider) {
  //    firebase.auth().signInWithPopup(provider)
  //   //  .then(function(y){
  //   //    console.log(y)
  //   //  })
  // };




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
      // console.log(user)
      $scope.currentUser = user;
      console.log(user);
    })
  }
  //////////This is refrencing AuthFactory and is capitalized bc that is what is defined in AuthFactory.js
  $scope.login = AuthFactory.authWithProvider
  /////////////This will login in with google////////////////

  /////////Logout function/////////////
  $scope.logout = function(){
    firebase.auth().signOut()
    .then(function(user){   ///////////Returning promises
      console.log(user);
    })
  }
});
