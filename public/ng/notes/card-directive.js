(function() {
	angular.module('vsd')
	.directive("card", function(){
		return {
			restrict: "E",
			replace: true,
			templateUrl: "ng/notes/card-directive.html",
			scope: {
				header: "=",
				description: "="
			}
		}
	});
})();