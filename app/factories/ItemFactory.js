
"use strict";
app.factory("ItemStorage", function(FirebaseUrl, $q, $http) {

  let getItemList = function() {
    let items = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseUrl}/items.json`)
      .success(function(itemObject) {
        let itemCollection = itemObject;
        Object.keys(itemCollection).forEach(function(key) {
          itemCollection[key].id=key;
          items.push(itemCollection[key]);
        });
        resolve(items)
      })
      .error(function(error) {
        reject(error);
      })
    });
  };

  let postNewItem = function(newItem) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseUrl}/items.json`,
        JSON.stringify(newItem))
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase)
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  return {getItemList, postNewItem};
});
