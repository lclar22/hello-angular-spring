(function() {
	'use strict';

	angular
		.module('app')
		.service('AboutService', AboutService);

	AboutService.$inject = ['$http'];
	function AboutService($http) {

		var service = {};

		return service;
	}
	
})();