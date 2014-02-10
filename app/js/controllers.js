'use strict';

/* Controllers */
var galleryAppControllers = angular.module('galleryApp.controllers', []);

/* HomeCtrl - Controller for home page */
galleryAppControllers.controller('HomeCtrl', ['$scope','$http','$rootElement',function($scope,$http,$rootElement) {	
	$scope.paintings = [];
  	$http.get('../paintings/paintings.json').success(function (galleries) {
  		_.each(galleries, function(gallery){
  			_.each(gallery.paintings, function(painting) {
  				if(painting.highlight === "true"){
  					$scope.paintings.push(painting);	
  				}
  			});	
  		});
  	});
}]);

/* PaintingCtrl - Controller for painting view page */
galleryAppControllers.controller('PaintingCtrl', ['$scope','$http','$routeParams','_',function($scope,$http,$routeParams,_) {
  	$http.get('../paintings/paintings.json').success(function (galleries) {
  		var selectedGallery = null;
  		_.each(galleries, function(gallery) {
  			if(gallery.id === $routeParams.galleryId) selectedGallery = gallery;
  		});
  		var paintings = _.filter(selectedGallery.paintings, function(painting) { 
  			return painting.id === $routeParams.paintingId;
  		});
  		$scope.painting = paintings[0];
  	});
}]);