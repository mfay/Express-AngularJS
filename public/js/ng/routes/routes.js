(function(){
	angular.module("vsd")
	.config(function($routeProvider){
		$routeProvider.when('/notes', {
			templateUrl: '/templates/pages/notes/index.html'
		})
		.otherwise({redirectTo: "/"});
	});
})();