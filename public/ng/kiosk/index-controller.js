(function() {
	angular.module('vsd')
		.controller('KioskIndexController', function($scope) {
			$scope.message = "Nothing to see";
			var socket = io();
			socket.on('connect', function() {
				$scope.message = "You are now connected via socket.io";
				$scope.$apply();
				
				socket.on('news', function(data) {
					$scope.message = data.title;
					$scope.$apply();
				});
			});
			$scope.$on("$destroy", function() {
				socket.disconnect();
			});
		});
})();