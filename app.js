angular.module('demo', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'validation', 'validation.rule', 'LocalStorageModule','angular-growl']);

angular.module('demo').config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider,growlProvider) {


    localStorageServiceProvider.setPrefix('demo');
growlProvider.globalTimeToLive(2000);

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'partial/register/register.html'
    });

    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'partial/profile/profile.html',
        params: {
            requireLogin: true,
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');


    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'partial/login/login.html'
    });

});

angular.module('demo').run(function($rootScope, localStorageService, $location) {

    if (localStorageService.get('loggedIn') == 'null') {
        localStorageService.set('loggedIn', false);    
    }
    

    $loginStatus = localStorageService.get('loggedIn');
    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
    console.log('loggedin status' + $loginStatus);
    $rootScope.$on('$stateChangeStart',

        function(event, toState, toParams, fromState, fromParams) {


            if (!$loginStatus && !angular.isUndefined(toParams.requireLogin)) {

                $location.path('/login');
                console.log('require login');

            } else {
                console.log(' login');
            }

            // console.log(drupal.drupalUser);
        });

});