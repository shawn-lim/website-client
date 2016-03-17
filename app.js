(function () { 'use strict';}());

angular.module('angularClient', ['angular.filter', 'ngAnimate','ui.router','ngOrderObjectBy','duScroll', 'ng-token-auth', 'tabs', 'textAngular', '720kb.tooltips','ui.utils','ngAnimate', 'ngTable']);

angular.module('angularClient').run(function($rootScope) {

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
