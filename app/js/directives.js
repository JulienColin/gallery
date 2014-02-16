'use strict';

/* Directives */
angular.module('galleryApp.directives', []).
  directive('myMenu', [function() {
	  		return {
		   		templateUrl: function(element, attrs) {
		   			return '/templates/my-' + attrs.myMenu + '-menu.html';
		   		}
		    }
}]);
