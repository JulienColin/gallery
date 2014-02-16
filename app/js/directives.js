'use strict';

/* Directives */
angular.module('galleryApp.directives', []).
  directive('myMenu', [function() {
	  		return {
	  			restrict: 'E',
		   		templateUrl: '/templates/my-main-menu.html'
		    }
}]).directive('mySubMenu', [function(){
	  		return {
	  			restrict: 'E',
	  			scope: {
	  				menuItems: '=myMenuItems',
	  				currentMenuItem: '=myMenuCurrent'
	  			},
		   		templateUrl: '/templates/my-sub-menu.html'
	    	}
}]);
