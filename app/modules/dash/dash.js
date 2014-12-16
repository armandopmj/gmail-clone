(function(){
    //TODO: reaserch 'use strict' in IIFE
    'use strict';
    
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
    .factory('dashService', [ 
        '$http', 
        dashService
    ])
    .controller('dashController', [ 
        '$scope', 
        'dashService',
        'LoggedInUser', 
        dashController
    ]);
    function dashService( $http ) {
        //TODO: Make api call to retrive user emails
        var dashService = {}
        dashService.getInbox = getInbox;
        return dashService;

        function getInbox( userName ){ 
            //TODO: Refactor request to resolve, then retrun value
            //      vs returning promise 

            return $http({ 
                    url: 'api/inbox/' + userName, 
                    method: 'GET'
                    // params: {'userName': 'Armando Perez'}
                })
        }
    }
    function dashController( $scope, dashService, LoggedInUser ){
        $scope.boxes = ['inbox', 'sent', 'trash', 'spam'];
            var messages;
            console.log('LoggedInUser.name:', LoggedInUser.name)
            dashService.getInbox( LoggedInUser.name )
                .then(function( result ){
                    messages = result;
                    console.log( 'messages', messages );
                });
    }
    
})();