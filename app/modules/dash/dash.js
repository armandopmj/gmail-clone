angular
.module('gmailApp.dash', [])
.config([ '$stateProvider', function( $stateProvider ){
    $stateProvider
        .state( 'dash', {
            url: '/dash',
            templateUrl: 'modules/dash/dash.html',
            controller: 'dashController'
        })
}])
.controller('dashController', [ '$scope', function( $scope ) {
    $scope.boxes = ['inbox', 'sent', 'trash', 'spam'];
}])
.factory('dashService' [ '$http' function( $http ){
    //TODO: Make api call to retrive user emails

}]);