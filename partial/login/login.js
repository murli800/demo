angular.module('demo').controller('LoginCtrl',function($scope,localStorageService,$location,$state){
	var email;
	var password;
	$scope.form = {};
	$scope.submitForm = function(formValid) {
		if (formValid) {
			// Code here if valid
		email = localStorageService.get('email');			

		password = localStorageService.get('pwd');
			// console.log(this.isUndefinedOrNull(email));
			if(this.isUndefinedOrNull(email) || this.isUndefinedOrNull(password)){

				// console.log('m hrere');
				$location.path('/register');
			}

			if(($scope.form.email = email) &&  ($scope.form.password = password) ){
					localStorageService.set('loggedIn',true);
					$state.go('profile');
			}


		} else {
			console.log('not valide');
		}
	};

	$scope.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null 
	}

});