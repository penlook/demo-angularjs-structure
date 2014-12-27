function languageController($scope, languageService) {
	$scope.sendMessage = function() {
		console.log(languageService.message);
	}
}