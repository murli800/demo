angular.module('demo').controller('ProfileCtrl', function($scope, localStorageService,$location) {

	$scope.profile = {
		'email': localStorageService.get('email'),
		'fullName': localStorageService.get('fullName')
	};



	$scope.logout = function() {
		console.log('logout');
		// localStorageService.clearAll();
		localStorageService.set('loggedIn',false);

		$location.path('/login');


	};



});