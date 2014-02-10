'use strict';

/* Registering application module */
angular.module('galleryApp', [
  'ngRoute',
  'ngAnimate',
  'galleryApp.filters',
  'galleryApp.services',
  'galleryApp.directives',
  'galleryApp.controllers',
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  //use html5 routing mode when available (modern browser)
  //$locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/:galleryId/:paintingId', {templateUrl: 'partials/painting.html', controller: 'PaintingCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
