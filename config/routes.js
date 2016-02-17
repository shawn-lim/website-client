
/**
 * $urlRouterProvider must be defined before the routes for the redirections to work properly.
 */
angular.module('angularClient').config(function ($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

	//    Allow trailing slashes
	$urlMatcherFactoryProvider.strictMode(false);

	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});

angular.module('angularClient').config(function($stateProvider) {
  /* Add New States Above */
});

