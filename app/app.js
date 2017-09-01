"use strict";

console.log("app");
var app = angular.module("TodoApp", ['ngRoute']);


app.config(($routeProvider)=> {
	$routeProvider.when('/',{
		templateUrl: 'partials/shrooms.html',
		controller: "shroomlist"
	}).otherwise('/');
});