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
        'LoggedInUser',
        '$state',
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

    function LoginService( $http, LoggedInUser, $state ){
        LoginService = {};
        
        LoginService.login = function( loginData ) {
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
                    alert("Not Valid User")
                });
        }
        
        return LoginService;
    }
})();