'use strict';

/* Services */
var galleryAppServies = angular.module('galleryApp.services', []);
  
// Registering underscore module
galleryAppServies.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});
