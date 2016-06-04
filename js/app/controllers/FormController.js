function FormController($scope) {
	var ctrl = this;

	ctrl.name = '';
	ctrl.coupon = '';

}

angular
	.module('app')
	.controller('FormController', FormController);