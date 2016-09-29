(function() {
    'use strict';
    
	angular
		.module('app')
		.config(Routes);
	
	Routes.$inject = ['$routeProvider'];
    function Routes($routeProvider) {

    	$routeProvider.
	    	 when('/about', {
	    	   templateUrl: 'templates/about/about.html',
	    	   controller:	'AboutCtrl',
	           controllerAs: 'about'
	       	 }).
	    	 when('/', {
	    	   templateUrl: 'templates/main/main.html',
	    	   controller:	'MainCtrl',
	           controllerAs: 'main'
	       	 }).
	         otherwise({
	           redirectTo: '/'
	         });
    }
    
})();