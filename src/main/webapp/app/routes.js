(function() {
    'use strict';
    
	angular
		.module('app')
		.config(Routes);
	
	Routes.$inject = ['$routeProvider'];
    function Routes($routeProvider) {

    	$routeProvider.
	    	 when('/', {
	    	   templateUrl: 'templates/main/main.html',
	    	   controller:	'MainCtrl',
	           controllerAs: 'main'
	       	 }).
	    	 when('/about', {
	    	   templateUrl: 'templates/about/about.html',
	    	   controller:	'MainCtrl',
	           controllerAs: 'main'
	       	 }).
	         otherwise({
	           redirectTo: '/'
	         });
    }
    
})();