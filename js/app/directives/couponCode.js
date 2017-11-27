function couponCode() {
	var regex = /\d{2}[a-z]{4}\d{2}/;
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$validators.coupon = function(value) {
				return regex.test(value);
			};
		}
	};
}

angular
	.module('app')
	.directive('couponCode', couponCode);
