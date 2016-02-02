angular.module( 'app', [
	'ngRoute', 
	'controllers', 
	'services'
] )
.config( function( $routeProvider ) {

	$routeProvider

		.when( '/', {
			templateUrl: 'views/main.html'
		} )

		.when( '/alarm', {
			templateUrl: 'views/alarm.html'
		} );  
} );