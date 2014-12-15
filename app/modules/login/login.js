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
        LoginService
    ])  
    .controller('LoginCtrl', [
        '$scope',
        '$state',
        'LoginService',
        'LoggedInUser',
        LoginCtrl
    ]);

    function LoginCtrl($scope, $state, LoginService, LoggedInUser){
        $scope.userLogin = function(){ 
            var data = {
                name: $scope.name,
                password: $scope.password
            };
            LoginService.login(data, function(){
                //TODO: refactor this logic out of anonymous function and into service
                console.log( data );
                LoggedInUser.name = data.name;
                $state.go( 'dash' );
            });   
        };
    };

    function LoginService(){
        loginServ = {};
        loginServ.login = function( data, callback ) {
            callback();
        }
        return loginServ;
    }
})();