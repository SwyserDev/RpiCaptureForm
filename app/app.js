"use strict";

var rpiApp = angular.module('rpiApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

rpiApp.config(function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'app/views/homeView.html',
    controller: 'HomeController'
  }).
  when('/voted', {
    templateUrl: 'app/views/votedView.html',
    controller: 'VotedController'
  }).
  when('/alreadyVoted', {
    templateUrl: 'app/views/alreadyVotedView.html',
    controller: 'alreadyVotedController'
  }).
  otherwise({
    redirectTo: '/home'
  });
});

rpiApp.config(function($mdThemingProvider) {
    $mdThemingProvider
    .theme('default')
    .primaryPalette('green')
    .accentPalette('grey')
    .warnPalette('red');
});
