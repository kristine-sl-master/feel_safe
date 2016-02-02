angular.module( 'controllers' )
	.controller('HeaderCtrl', function( $log, $scope, menu ) {

	var vm = this;

	vm.contacts = {
		active: false
	}

	vm.toggleContacts = function() {

		var active = menu.getActiveMenu() === menu.contacts ? menu.none : menu.contacts; 

		menu.changeMenu( active ); 

		vm.contacts.active = menu.getActiveMenu() === menu.contacts; 
	}

	$scope.$on( menu.change, function( event, args ) {

		vm.contacts.active = menu.getActiveMenu() === menu.contacts; 
	})
}); 