(function(){
    //TODO: reaserch 'use strict' in IIFE
    'use strict';

    angular
    .module('gmailApp.login', [])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state(
            'login', {
                url: '/login',
                templateUrl: 'modules/login/login.html',
                // controllerAs: 'login',
                controller: 'LoginCtrl'
            }
        );
    }])
    .factory('LoginService', [
        '$http',
        '$state',
        'LoggedInUser',
        LoginService
    ])  
    .controller('LoginCtrl', [
        '$scope',
        'LoginService',
        LoginCtrl
    ]);

    function LoginCtrl($scope, LoginService){
        $scope.userLogin = function(){ 
            var data = {
                name: $scope.name,
                password: $scope.password
            };
            LoginService.login( data );
        };
    };

    function LoginService( $http, $state, LoggedInUser ){
        /////////////////////////////////////////////////////////
        // C: LoginService construction overview
        LoginService = {};
        LoginService.login = login;
        
        return LoginService;

        //////////////////////////////////////////////////////////
        // C: LoginService logic
        function login( loginData ) {
            $http({
                url: 'auth/login',
                method: 'GET',
                params: loginData
            })
            .then(
                function(result){
                    LoggedInUser.name = loginData.name;
                    LoggedInUser.id = result.id;
                    $state.go( 'dash' );
                }, 
                function(err){
                    // C: Handle un-valid user names
                    console.log( 'err:', err );
                    alert( err.data + " is not a valid user.." )
                });
        }

    }
})();