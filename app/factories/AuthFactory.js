"use strict";


app.factory("AuthFactory", function(){
  let currentUserId = null;
  let provider = new firebase.auth.GoogleAuthProvider();
  console.log("provider", provider);

  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      console.log("user has logged in", user.uid);
    } else {
      console.log("user is not logged in");
    }
  });

let authWithProvider = function() {
  return firebase.auth().signInWithPopup(provider);
};

let isAuthenticated = function() {
  return (currentUserId) ? true : false;
};

let getUser = function() {
  return currentUserId;
};
return {authWithProvider, isAuthenticated, getUser};  ////////returning these allows them to be accessed by other documents
});  //////////AuthFactory.authWithProvider is used in Navbar.js
