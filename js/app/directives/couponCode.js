function couponCode() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$validators.coupon = function(code) {
				var regex = (/\d{2}[a-z]{4}\d{2}/i);
				return regex.test(code);
			}
		}
	}
}

angular
	.module('app')
	.directive('couponCode', couponCode);
