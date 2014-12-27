(function() {
	"use strict";

	var app = angular
		.module("register", [])
		.factory("languageService", pkg.service.language)
		.controller("registerController", pkg.controller.register)
		.controller("languageController", pkg.controller.language);
})();