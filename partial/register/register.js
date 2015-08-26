angular.module('demo').controller('RegisterCtrl', function($scope,localStorageService) {

	$scope.form = {};
	$scope.submitForm = function(formValid) {
		if (formValid) {
			// Code here if valid
			console.log($scope.form);
			// angular.forEach
			angular.forEach($scope.form, function(value, key) {
				
			 localStorageService.set(key, value);
			});

		} else {
			console.log('not valide');
		}
	};
});