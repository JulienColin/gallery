'use strict';

/* Controllers */
var galleryAppControllers = angular.module('galleryApp.controllers', []);

/* AppCtrl - Controller for whole application */
galleryAppControllers.controller('AppCtrl', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.uses(key);
    }
});

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

/* PaintingsCtrl - Controller for paintings galleries view page */
galleryAppControllers.controller('PaintingsCtrl', ['$scope','$http','$routeParams','_',function($scope,$http,$routeParams,_) {
    $http.get('../paintings/paintings.json').success(function (galleries) {
      var menuItems = [];

      // Set currently selected gallery
      var selectedGallery = null;
      _.each(galleries, function(gallery) {
          if(gallery.id === $routeParams.galleryId) {
            selectedGallery = gallery;
          } 
      });
      if(!selectedGallery) selectedGallery = galleries[0];

      // Populate menu
      _.each(galleries, function(gallery) {
          var selected = null;
          if(gallery.id === selectedGallery.id) selected = "selected";
          menuItems.push({
            label : gallery.name,
            url : '/#/paintings/' + gallery.id,
            selected: selected
          });
      });
      $scope.selectedGallery = selectedGallery;
      $scope.menuItems = menuItems;
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