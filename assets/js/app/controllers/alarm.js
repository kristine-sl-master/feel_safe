angular.module( 'controllers' )
	.controller( 'AlarmCtrl', function( $interval, $timeout, $log ) {

		var vm = this;

		vm.activeIcon = 1; 

		var intervalTime = 250;

		$interval( function() {

			vm.activeIcon === 2 ? vm.activeIcon = 1 : vm.activeIcon++;

		}, intervalTime ); 
} ); 