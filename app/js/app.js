'use strict';

/* Registering application module */
angular.module('galleryApp', [
  'ngRoute',
  'ngAnimate',
  'galleryApp.filters',
  'galleryApp.services',
  'galleryApp.directives',
  'galleryApp.controllers',
  'pascalprecht.translate',
  'labels'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  //use html5 routing mode when available (modern browser)
  //$locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/exhibitions', {templateUrl: 'partials/exhibitions.html', controller: 'ExhibitionsCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
  $routeProvider.when('/paintings', {templateUrl: 'partials/paintings.html', controller: 'PaintingsCtrl'});
  $routeProvider.when('/paintings/:galleryId', {templateUrl: 'partials/paintings.html', controller: 'PaintingsCtrl'});
  $routeProvider.when('/paintings/:galleryId/:paintingId', {templateUrl: 'partials/painting.html', controller: 'PaintingCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
