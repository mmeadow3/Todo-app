"use strict";

app.controller("LoginCtrl", function($scope, $location, AuthFactory){


  AuthFactory.authWithProvider()
    .then(function(result) { /////start of then statement for promise
      var user = result.user.uid;
      console.log("logged in user for sure", user);
      // Load to dos?
      $location.path("/");
      $scope.$apply();
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
});
