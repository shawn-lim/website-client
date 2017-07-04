
/**
 * $urlRouterProvider must be defined before the routes for the redirections to work properly.
 */
angular.module('angularClient').config(function ($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

	//    Allow trailing slashes
	$urlMatcherFactoryProvider.strictMode(false);

	// use the HTML5 History API
	$locationProvider.html5Mode(true);
  // If you use ngTokenAuth, use the code below, or implement your own. Remember to set the APILOCATION somewhere like the app.js file.
  //$authProvider.configure({
    //apiUrl: 'http://'+APILOCATION.host+ (APILOCATION.port === '80' ? '' : ':'+APILOCATION.port)
  //});
});

angular.module('angularClient').config(function($stateProvider) {
  $stateProvider.state('main', {
      url: '/',
      templateUrl: 'partial/main/main.html'
    });
  /* Add New States Above */
});

