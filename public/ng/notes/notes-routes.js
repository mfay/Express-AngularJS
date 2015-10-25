(function(){
	angular.module("vsd")
	.config(function($routeProvider) {
		$routeProvider.when('/notes', {
			templateUrl: '/ng/notes/index.html',
			controller: 'NotesIndexController'
		});
	});
})();