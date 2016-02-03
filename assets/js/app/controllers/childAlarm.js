angular.module( 'controllers' )
	.controller( 'ChildAlarmCtrl', function( $interval, $timeout, $log ) {

		var vm = this; 

		vm.alert = {
			active: false, 
			description: ''
		}

		vm.soundAlarm = function() {

			setAlert( 'The police and your parents have been notified and are on their way.' ); 
		}

		function setAlert( description ) {

			vm.alert.active = true; 
			vm.alert.description = description; 
		}

		function deactivateAlarm() {

			vm.alert.active = false; 
			vm.alert.description = ''; 
		}
} ); 