(function () { 'use strict';}());

angular.module('angularClient').directive('sidebar', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/sidebar/sidebar.html',
		link: function(scope, element, attrs, fn) {
		},
		controller: function($scope){
			
		}
	};
});
