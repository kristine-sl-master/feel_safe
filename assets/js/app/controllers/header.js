angular.module( 'controllers' )
	.controller('HeaderCtrl', function( $log, $scope, menu, $rootScope ) {

	var vm = this;

	vm.contacts = {
		active: false
	}

	vm.settings = {
		active: false
	}

	vm.toggleContacts = function() {

		var active = menu.getActiveMenu() === menu.contacts ? menu.none : menu.contacts; 

		menu.changeMenu( active ); 

		vm.contacts.active = menu.getActiveMenu() === menu.contacts; 
		vm.settings.active = false;
	}

	vm.toggleSettings = function() {

		var active = menu.getActiveMenu() === menu.settings ? menu.none : menu.settings; 

		menu.changeMenu( active ); 

		vm.settings.active = menu.getActiveMenu() === menu.settings; 
		vm.contacts.active = false;
	}

	$scope.$on( menu.change, function( event, args ) {

		vm.contacts.active = menu.getActiveMenu() === menu.contacts; 
		$rootScope.showSettings = menu.getActiveMenu() === menu.settings;
	})
}); 