(function () { 'use strict';}());

angular.module('angularClient', ['angular.filter', 'ngAnimate','ui.router','ngOrderObjectBy','duScroll', 'ng-token-auth', 'tabs', 'textAngular', '720kb.tooltips','ui.utils','ngAnimate', 'ngTable']);

angular.module('angularClient').run(function($rootScope, $http, $state) {

  $rootScope.System.version = 'Loading...';

  $http.get('/client_version').success(function(res){
    $rootScope.System.version = res;
  });

  // Loading for uistate
  $rootScope.state_loading = false;
 
 // This sets the UI to state loading you can use for loading screens
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    $rootScope.state_loading = true;
    // This checks the client version against the server version.
    $http.get('/client_version').success(function(res){
      if(!$rootScope.System.version || $rootScope.System.version !== res){
        event.preventDefault();
        // You can use your own dialog implementation if you require.
        $rootScope.createDialog({
          title: 'Please refresh your window',
          content: 'Hi! We\'ve recently updated our application. In order for you to have the best experience, please refresh your window. Thanks!',
          onConfirm: function(){
            location.reload();
          },
          confirm_text: 'Refresh Window',
          hide_cancel_btn: true
        });
      }
    });
  });
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $rootScope.state_loading = false;
    $rootScope.current_state = toState;
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
    console.log(error);
    if(error.status === 403){
      $rootScope.toast_error('You are not allowed to view this page.');
    }
    $state.go('overview');
    $rootScope.state_loading = false;
  });
    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
