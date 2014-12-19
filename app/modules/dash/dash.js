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

        function getInbox( userID ){
            console.log('userID in getInbox function:', userID);
            //TODO: Refactor request to resolve, then retrun value
            //      vs returning promise 
            return $http({ 
                    url: 'api/inbox/' + userID, 
                    method: 'GET'
                    // params: {'userName': 'Armando Perez'}
                })
        }
    }
    function dashController( $scope, dashService, LoggedInUser ){
        $scope.boxes = ['inbox', 'sent', 'trash', 'spam'];
            var messages;
            console.log('LoggedInUser.name:', LoggedInUser.name)
            console.log('LoggedInUser.id:', LoggedInUser.id)
            // console.log('LoggedInUser.result:', LoggedInUser.result)
            
            dashService
            .getInbox( LoggedInUser.id )
            .then(function( result ){
                messages = result;
                console.log( 'messages', messages );
            });
    }
    
})();