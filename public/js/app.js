(function(){angular.module("vsd",["ngRoute","ngResource"])})();(function(){angular.module("vsd").config(function($routeProvider){$routeProvider.when("/notes",{templateUrl:"/templates/pages/notes/index.html"}).otherwise({redirectTo:"/"})})})();(function(){angular.module("vsd").factory("Note",function NoteFactory($resource){return $resource("/api/notes",{},{})})})();