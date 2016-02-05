angular.module( 'services' )
	.factory( 'menu', function( $rootScope ) {

		var none = 0; 
		var contacts = 1; 
		var settings = 2;

		var active = none;

		var change = "menu-changed"; 

		var changeMenu = function( currentActive ) {

			active = currentActive;
			$rootScope.$broadcast( change ); 
		}

		var getActiveMenu = function() {

			return active; 
		}

		return {

			none: none, 
			contacts: contacts, 
			settings: settings,
			change: change,
			changeMenu: changeMenu, 
			getActiveMenu: getActiveMenu
		}
	}
); 