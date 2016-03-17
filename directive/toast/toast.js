(function () { 'use strict';}());

angular.module('angularClient').directive('toast', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: true,
		templateUrl: 'directive/toast/toast.html',
		link: function(scope, element, attrs, fn) {

		},
		controller: function($scope, $rootScope, $timeout){
			$scope.toast = null;
			$rootScope.toast = function(toast){
				$scope.toast = {};
				$scope.toast.duration = toast.duration || 5;
				$scope.toast.type = toast.type || '';
				$scope.toast.msg = toast.msg;

				$timeout(function(){
					$scope.toast = null;
				}, toast.duration * 1000);
			};

			$rootScope.toast_error = function(msg){
				$rootScope.toast({
					type: 'error',
					msg: msg,
					duration: 5
				});
			};

			$rootScope.toast_success = function(msg){
				$rootScope.toast({
					msg: msg,
					duration: 5
				});
			};

			$rootScope.toast_warn = function(msg){
				$rootScope.toast({
					type: 'warning',
					msg: msg,
					duration: 5
				});
			};
		}
	};
});
