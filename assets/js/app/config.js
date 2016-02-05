angular.module( 'app' )
	.config( function( $routeProvider ) { // WHY DOESN'T THIS WORK?! 

		$routeProvider

			.when( '/', 		{ templateUrl: 'views/main.html' } )
			.when( '/alarm', 	{ templateUrl: 'views/alarm.html'} );

		// $routeProvider

		// 	.when( '/', 		{ templateUrl: 'views/main.html' } )
		// 	.when( '/alarm', 	{ templateUrl: 'views/alarm.html'} )
		// 	.when( '/child', 	{ templateUrl: 'views/child.html' } );  
	} ).run( function( $rootScope, user ) {
		$rootScope.isChild = user.getUser() === user.types.child;
		$rootScope.setChildMode = function() {
			$rootScope.isChild = true;
			user.setUser( user.types.child );
			return false;
		}
		$rootScope.setAdultMode = function() {
			$rootScope.isChild = false;
			user.setUser( user.types.adult );
			return false;
		}
	} );