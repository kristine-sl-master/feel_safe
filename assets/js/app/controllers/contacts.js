angular.module( 'controllers' )
	.controller('ContactsCtrl', function( $scope, menu ) {

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
});