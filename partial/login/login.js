angular.module('demo').controller('LoginCtrl',function($scope,localStorageService,$location,$state,growl){
	var email;
	var password;
	$scope.form = {};
	$scope.submitForm = function(formValid) {
		if (formValid) {

			console.log($scope.form);
			// Code here if valid
		email = localStorageService.get('email');			
		// console.log(email == $scope.form.email);

		password = localStorageService.get('pwd');
		var storedPwd = $scope.form.password;
			// console.log(password);
			// console.log(storedPwd);
			
			// console.log( angular.equals(storedPwd, password));
			// console.log(this.isUndefinedOrNull(email));
			if(this.isUndefinedOrNull(email) || this.isUndefinedOrNull(password)){

				// console.log('m hrere');
				growl.info("please create account first");
				$location.path('/register');
			}

			if(($scope.form.email == email) &&  ($scope.form.password == password) ){
					localStorageService.set('loggedIn',true);
					$state.go('profile');
			} else {
				growl.error("Wrong username/password");
			}


		} else {
			growl.error("Email and password required.");
			console.log('not valide');
		}
	};

	$scope.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null 
	}

});