'use strict';

var app = angular.module("oceanCity",["ngRoute"]);



app.config(function($routeProvider) {
	// $locationProvider.html5Mode(true),
	$routeProvider.when('/home', {
		templateUrl: 'sources/home.html',
		controller: 'HomeController'
	}).when('/menu', {
		templateUrl: 'sources/menu.html',
		controller: 'MenuController'
	}).otherwise({redirectTo: '/home'});
});
