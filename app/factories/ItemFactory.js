"use strict";


app.factory("ItemStorage", function(FirebaseUrl, $q, $http) {
////////////// $q ==== A service that helps you run functions asynchronously///////////
// The $http service is a core Angular service that facilitates communication
// with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP./////////
// it is followed by a command and a url//////////////
  let getItemList = function() {
    let items = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseUrl}/items.json`)
      .success(function(itemObject) {
        if (itemObject) {
        let itemCollection = itemObject;
        Object.keys(itemCollection).forEach(function(key) {
          itemCollection[key].id=key;
          items.push(itemCollection[key]);
        });
      }
        resolve(items)
      })
      .error(function(error) {
        reject(error);
      })
    });
  };
////////This is sending the data to FB////////////////
  let postNewItem = function(newItem) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseUrl}/items.json`, ////////this posts to FB database///////////
        JSON.stringify(newItem))
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase)    ////////this posts to FB database///////////
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
