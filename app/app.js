angular
.module('gmailApp', [ 
    'ui.router',
    'gmailApp.login',
    'gmailApp.dash' ])
.config( [ '$urlRouterProvider', function( $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/login');
}]);