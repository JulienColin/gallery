'use strict';

// Animations
var galleryAppAnimations = angular.module('galleryApp.animations', ['ngAnimate']);

galleryAppAnimations.animation('.painting-wrapper', function() {
	return {
	    enter : function(element, done) {
	      element.css('opacity',0);
	      jQuery(element).animate({ opacity: 1}, done);
	    }
    } 
});
