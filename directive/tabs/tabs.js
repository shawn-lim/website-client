/**
 * The angular tabs module
 * @author: nerv
 * @version: 0.2.5, 2012-08-25
 */
(function(angular) {

	'use strict';

	function ngTabsDirective() {
		return {
			scope: true,
			restrict: 'EAC',
			controller: ngTabsController
		};
	}

	function ngTabsController($scope) {
		$scope.tabs = {
			index: 0,
			count: 0
		};
		/*jshint validthis: true */
		this.headIndex = 0;
		/*jshint validthis: true */
		this.bodyIndex = 0;

		/*jshint validthis: true */
		this.getTabHeadIndex = function () {
			return $scope.tabs.count = ++this.headIndex; // jshint ignore:line
		};

		/*jshint validthis: true */
		this.getTabBodyIndex = function () {
			return ++this.bodyIndex;
		};
	}

	ngTabsController.$inject = ['$scope'];

	angular.module('tabs', []);

	angular.module('tabs')
		.directive('ngTabs', ngTabsDirective);

	function ngTabHeadDirective() {
		return {
			scope: false,
			restrict: 'EAC',
			require: '^ngTabs',
			link: function (scope, element, attributes, controller) {
				var index = controller.getTabHeadIndex();
				var value = attributes.ngTabHead;
				var active = /[-*\/%^=!<>&|]/.test(value) ? scope.$eval(value) : !!value;

				scope.tabs.index = scope.tabs.index || ( active ? index : null );

				element.bind('click', function () {
					scope.tabs.index = index;
					scope.$$phase || scope.$apply(); // jshint ignore:line
				});

				scope.$watch('tabs.index', function () {
					element.toggleClass('active', scope.tabs.index === index);
				});
			}
		};
	}

	angular.module('tabs')
		.directive('ngTabHead', ngTabHeadDirective);

	function ngTabBodyDirective() {
		return {
			scope: false,
			restrict: 'EAC',
			require: '^ngTabs',
			link: function (scope, element, attributes, controller) {
				var index = controller.getTabBodyIndex();

				scope.$watch('tabs.index', function () {
					element.toggleClass(attributes.ngTabBody + ' ng-show', scope.tabs.index === index);
				});
			}
		};
	}

	angular.module('tabs')
		.directive('ngTabBody', ngTabBodyDirective);

})(angular);
