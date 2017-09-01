"use strict";
 console.log("shrooms");

// var app = angular.module('ToDoApp',['ngRoute']);
angular.module("TodoApp").controller("shroomlist", function ($scope, shrooms) {

        shrooms.getFlavors()
        .then(function (itemCollection) {
            $scope.mushrooms = (itemCollection);
            $scope.edible = [];
            $scope.poisonous = [];
            $scope.mushrooms.forEach((item)=>{
                if (item.edible){

               $scope.edible.push(item);
                }
                else {
                    $scope.poisonous.push(item);
                }
            
            });
            
            $scope.returnedible = () =>{
                $scope.mushrooms = $scope.edible;
                // return $scope.mushrooms
            };
            $scope.returnpoisonous = () =>{
                $scope.mushrooms = $scope.poisonous;
                // return $scope.poisonous;
            };

        });
    
});

