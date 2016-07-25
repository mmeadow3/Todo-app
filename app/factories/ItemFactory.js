"use strict";


app.factory("ItemStorage", function(FirebaseUrl, $q, $http) {  //////this is where we originally define ItemStorage
////////////// $q ==== A service that helps you run functions asynchronously///////////
// The $http service is a core Angular service that facilitates communication
// with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP./////////
// it is followed by a command and a url//////////////


/////////GET is used get info from the server then do something with it.
  let getItemList = function() {
    let items = [];
    return $q(function(resolve, reject) {  ////beginning of a promise
      $http.get(`${FirebaseUrl}/items.json`) //this is json list of items in FB database
      .success(function(itemObject) { ///////when successful run this code////
        if (itemObject) {
        let itemCollection = itemObject; //////this is the varibale that will be used in every controller that needs the list
        Object.keys(itemCollection).forEach(function(key) {  /////Object.keys(nameObj).forEach(function(key)/////////
          itemCollection[key].id=key;
          items.push(itemCollection[key]); ////Generates a new child location using a unique key and returns a Firebase reference to it.
        });  /////also pushed data key to item array
      }
        resolve(items)  ////this runs the code
      })
      .error(function(error) {
        reject(error);
      })
    });
  };
////////This is sending the data to FB////////////////
  let postNewItem = function(newItem) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseUrl}/items.json`), ////////this posts to FB database///////////
        JSON.stringify(newItem)  ////just turns the JSON into a sting
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase)    ////////this posts to FB database bc it is resolved now/
      })
      .error(function(error) {
        reject(error);
      });
    });
  };
/////////////This will be the delete button
let deleteItem = function(delItem) {
  return $q(function(resolve, reject) {
    $http.delete(`${FirebaseUrl}/items/${delItem.id}.json`)
    .success(function() { ///////dont forget about .success
      resolve();
    })
    .error(function(error) {
      reject(error);
    })
  });
};

  return {getItemList, postNewItem, deleteItem};   //////////////both need to be returned at the end//////
});
