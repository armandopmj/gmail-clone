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
        dashController
    ]);
    function dashService( $http ) {
        //TODO: Make api call to retrive user emails
        var obj = {}
        obj.getInbox = getInbox;
        return obj;

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
    function dashController( $scope, dashService ){
        $scope.boxes = ['inbox', 'sent', 'trash', 'spam'];
            var messages;
            
            dashService.getInbox( 'Armando Perez' )
                .then(function( result ){
                    messages = result;
                    console.log( 'messages', messages );
                });
    }
})();