function FormController($scope) {
	var ctrl = this;

	ctrl.name = '';
	ctrl.coupon = '';

	$scope.$watch(function () {
		return ctrl.name;
	}, function (newValue) {
		console.log(newValue);
	});
}

angular
	.module('app')
	.controller('FormController', FormController);