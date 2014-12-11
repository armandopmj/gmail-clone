angular
    .module('gmailApp')
    .config([ '$stateProvider', function( $stateProvider ){
        $stateProvider
            .state( 'dash', {
                url: '/dash',
                templateUrl: 'modules/dash/dash.js',
                controller: 'dashController'

            })
    }])