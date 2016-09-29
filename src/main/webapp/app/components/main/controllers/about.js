(function() {
	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['$window', 'AboutService'];
	function AboutCtrl($window, AboutService) {

		var vm = this;

		vm.viewLocation = 'webapp/templates/about/about.html';

		return vm;
	}

})();