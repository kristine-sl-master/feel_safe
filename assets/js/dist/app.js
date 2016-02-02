angular.module( 'controllers', [] );
angular.module( 'services', [] );
angular.module( 'app', [
	'ngRoute', 
	'controllers', 
	'services'
] )
.config( ["$routeProvider", function( $routeProvider ) {

	$routeProvider

		.when( '/', {
			templateUrl: 'views/main.html'
		} )

		.when( '/alarm', {
			templateUrl: 'views/alarm.html'
		} );  
}] );
angular.module( 'controllers' )
	.controller( 'AlarmCtrl', ["$interval", "$timeout", "$log", function( $interval, $timeout, $log ) {

		var vm = this;

		vm.activeIcon = 1; 

		var intervalTime = 250;

		$interval( function() {

			vm.activeIcon === 2 ? vm.activeIcon = 1 : vm.activeIcon++;

		}, intervalTime ); 
}] ); 
angular.module( 'controllers' )
	.controller('ContactsCtrl', ["$scope", "menu", function( $scope, menu ) {

	var vm = this;

	vm.visible = false; 

	$scope.$on( menu.change, function() {

		vm.visible = menu.getActiveMenu() === menu.contacts; 
	} ); 

	vm.contacts = [
		{
			name: 'Kristine Sundt Lorentzen', 
			phone: '93216768'
		}, 
		{
			name: 'Alexander Tømmerås', 
			phone: '40609160'
		}, 
		{
			name: 'Alexander Tømmerås', 
			phone: '40609160'
		}, 
		{
			name: 'Alexander Tømmerås', 
			phone: '40609160'
		}, 
		{
			name: 'Alexander Tømmerås', 
			phone: '40609160'
		}, 
		{
			name: 'Alexander Tømmerås', 
			phone: '40609160'
		}
	];
}]);
angular.module( 'controllers' )
	.controller('HeaderCtrl', ["$log", "$scope", "menu", function( $log, $scope, menu ) {

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
}]); 
angular.module( 'services' )
	.factory( 'menu', ["$rootScope", function( $rootScope ) {

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

}]); 