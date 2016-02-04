angular.module( 'services' )
	.factory( 'user', function() {

		var types = {
			adult: 0, 
			child: 1
		}

		var user = {
			type: adult
		};  

		var setUserType = function( type ) {

			user.type = type; 
		}

		var getUserType = function() {

			return user.type; 
		}

		return {
			setUser: setUser, 
			getUser: getUser, 
			types: types
		}
} );