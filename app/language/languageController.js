pkg.controller.language = function ($scope, languageService) {
	$scope.sendMessage = function() {
		console.log(languageService.message);
	}
}