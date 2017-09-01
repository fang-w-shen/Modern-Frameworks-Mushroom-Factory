"use strict";
 console.log("flavor factory");
angular.module("TodoApp").factory("shrooms", function ($q, $http) {
    let getFlavors = ()=>{
        let items = [];
        return $q ((resolve, reject)=>{
            $http.get('./data/mushrooms.json')
                .then((itemObject) =>{
                    let itemCollection = itemObject.data.mushrooms;
                    var arr = Object.keys( itemCollection).map( function( key ){
                          var y = itemCollection[ key ];
                          y.key = key;
                          return y;
                        });
                    console.log("what is itemcoll",arr);
                    resolve(arr);
                })
                .catch((error)=>{
                reject(error);
                });
        });
     };
    let getOneFlavor = () =>{
        console.log("getting one flavor",getOneFlavor);
    };
    return {getFlavors, getOneFlavor};
 });


 