(function() {
	angular.module('vsd')
	.controller('NotesIndexController', function($scope, Note) {
		$scope.notes = Note.query();
	});
})();