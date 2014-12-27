var app = angular
	.module("register", [])
	.factory("languageService", languageService)
	.controller("registerController", registerController)
	.controller("languageController", languageController);