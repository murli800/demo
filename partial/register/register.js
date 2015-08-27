angular.module('demo').controller('RegisterCtrl', function($scope,localStorageService,growl) {

	$scope.form = {};
	$scope.submitForm = function(formValid) {
		if (formValid) {
			// Code here if valid
			console.log($scope.form);
			// angular.forEach
			angular.forEach($scope.form, function(value, key) {
				
			 localStorageService.set(key, value);
			  growl.success("Registration successful. Now you can login");
			});

		} else {
			 growl.error("All fieds are required");

			console.log('not valide');
		}
	};
});