'use strict';

/* Controllers */
var galleryAppControllers = angular.module('galleryApp.controllers',[]);

/* AppCtrl - Controller for whole application */
galleryAppControllers.controller('AppCtrl', ['$scope','$translate',function ($scope, $translate) {
    // Set default current view - used to know what menu item is selected
    $scope.currentMenuItem = "home";

    // Populate main menu
    var menuItems = [];
    _.each(['home','about','paintings','exhibitions','contact'], function(page) {
        menuItems.push({
          page: page,
          label: 'menu.' + page,
          url: '/#/' + page
        });
    });
    $scope.menuItems = menuItems;

    $scope.getCurrentMenuItem = function () {
        return $scope.currentMenuItem;
    }

    $scope.setCurrentMenuItem = function (key) {
        $scope.currentMenuItem = key;
    }

    $scope.changeLanguage = function (key) {
        $translate.uses(key);
    }
}]);

/* HomeCtrl - Controller for home page */
galleryAppControllers.controller('HomeCtrl', ['$scope','$http','$rootElement',function($scope,$http,$rootElement) {	
	// Set main menu selected item
  $scope.$parent.setCurrentMenuItem('home');

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

    // Populate sub menu
    $scope.$parent.currentSubMenuItem = null;
    $scope.$parent.subMenuItems = [];
}]);

/* PaintingsCtrl - Controller for paintings galleries view page */
galleryAppControllers.controller('PaintingsCtrl', ['$scope','$http','$routeParams','_',function($scope,$http,$routeParams,_) {
    // Set main menu selected item
    $scope.$parent.setCurrentMenuItem('paintings');

    $http.get('../paintings/paintings.json').success(function (galleries) {
      // Set currently selected gallery
      var selectedGallery = null;
      _.each(galleries, function(gallery) {
          if(gallery.id === $routeParams.galleryId) {
            selectedGallery = gallery;
          } 
      });
      if(!selectedGallery) selectedGallery = galleries[0];

      // Populate sub menu
      var subMenuItems = [];
      _.each(galleries, function(gallery) {
          var selected = null;
          if(gallery.id === selectedGallery.id) selected = "selected";
          subMenuItems.push({
            label : gallery.name,
            url : '/#/paintings/' + gallery.id,
            selected: selected
          });
      });
      $scope.$parent.currentSubMenuItem = selectedGallery;
      $scope.$parent.subMenuItems = subMenuItems;
    });
}]);

/* PaintingCtrl - Controller for painting view page */
galleryAppControllers.controller('PaintingCtrl', ['$scope','$http','$routeParams','_',function($scope,$http,$routeParams,_) {
  	// Set main menu selected item
    $scope.$parent.setCurrentMenuItem('paintings');

    $http.get('../paintings/paintings.json').success(function (galleries) {
  		var selectedGallery;
      var subMenuItems = [];
  		_.each(galleries, function(gallery) {
      		if(gallery.id === $routeParams.galleryId)selectedGallery = gallery;
          var selected = null;
          selected = (typeof selectedGallery !== "undefined" && selectedGallery.id === gallery.id)  ? "selected" : null;
          subMenuItems.push({
              label : gallery.name,
              url : '/#/paintings/' + gallery.id,
              selected: selected
          });

          if(typeof selectedGallery !== "undefined"){
            var paintings = _.filter(selectedGallery.paintings, function(painting) { 
              return painting.id === $routeParams.paintingId;
            });
          $scope.painting = paintings[0];     
          }

    	});
      // Populate sub menu
      $scope.$parent.currentSubMenuItem = selectedGallery;
      $scope.$parent.subMenuItems = subMenuItems;
  	});
}]);

/* ExhibitionsCtrl - Controller for exhibitions page */
galleryAppControllers.controller('ExhibitionsCtrl', ['$scope',function($scope) {
    // Set main menu selected item
    $scope.$parent.setCurrentMenuItem('exhibitions');

    // Populate sub menu
    $scope.$parent.currentSubMenuItem = null;
    $scope.$parent.subMenuItems = [];
}]);

/* AboutCtrl - Controller for about page */
galleryAppControllers.controller('AboutCtrl', ['$scope',function($scope) {
    // Set main menu selected item
    $scope.$parent.setCurrentMenuItem('about');

    // Populate sub menu
    $scope.$parent.currentSubMenuItem = null;
    $scope.$parent.subMenuItems = [];
}]);

/* ContactCtrl - Controller for contact page */
galleryAppControllers.controller('ContactCtrl', ['$scope',function($scope) {
    // Set main menu selected item
    $scope.$parent.setCurrentMenuItem('contact');

    // Populate sub menu
    $scope.$parent.currentSubMenuItem = null;
    $scope.$parent.subMenuItems = [];
}]);