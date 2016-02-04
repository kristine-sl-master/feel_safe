angular.module( 'app' )
	.config( function( $routeProvider, user ) { // WHY DOESN'T THIS WORK?! 

		var home = user.getType() === user.types.child ? 'views/child.html' : 'views/main.html'; 

		$routeProvider

			.when( '/', 		{ templateUrl: home } )
			.when( '/alarm', 	{ templateUrl: 'views/alarm.html'} );

		// $routeProvider

		// 	.when( '/', 		{ templateUrl: 'views/main.html' } )
		// 	.when( '/alarm', 	{ templateUrl: 'views/alarm.html'} )
		// 	.when( '/child', 	{ templateUrl: 'views/child.html' } );  
} );