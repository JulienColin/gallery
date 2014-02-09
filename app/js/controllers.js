'use strict';

/* Controllers */
var galleryAppControllers = angular.module('galleryApp.controllers', []);

galleryAppControllers.controller('HomeCtrl', ['$scope','$http',function($scope,$http) {
  	$http.get('../paintings/paintings.json').success(function (paintings) {
  		$scope.paintings = paintings;
  	});
  	$scope.highlight = "true";
}]);

galleryAppControllers.controller('PaintingCtrl', ['$scope','$http','$routeParams','_',function($scope,$http,$routeParams,_) {
  	$http.get('../paintings/paintings.json').success(function (paintings) {
  		var paintings = _.filter(paintings, function(painting) { 
  			return painting.id === $routeParams.paintingId 
  		});
  		$scope.painting = paintings[0];
  	});
}]);