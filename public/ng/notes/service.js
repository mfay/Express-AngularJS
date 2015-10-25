(function(){
	angular.module("vsd")
	.factory("Note", function NoteFactory($resource) {
		return $resource('/api/notes', {}, {});
	});
})();