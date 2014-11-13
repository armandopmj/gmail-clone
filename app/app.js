angular
  .module('gmailApp', [ 
    'ui.router',
    'gmailApp.login' ])
  .config( [ '$urlRouterProvider', function( $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/login');
  }]);