angular.module( 'services' )
	.factory( 'user', function() {

		var types = {
			adult: 0, 
			child: 1
		}

		var user = {
			type: types.child
		};  

		var setUserType = function( type ) {

			user.type = type; 
		}

		var getUserType = function() {

			return user.type; 
		}

		return {
			setUser: setUserType, 
			getUser: getUserType, 
			types: types
		}
} );