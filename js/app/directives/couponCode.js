function couponCode() {
	return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, elem, atters, ngModel ) {
				ngModel.$validators.coupon = function (value) {
					return  value.length >= 4 ;
				}
			}
	};
}

angular
	.module('app')
	.directive('couponCode', couponCode);
