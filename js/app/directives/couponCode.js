function couponCode() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$validators.coupon = function (str) {
				return (/\d{2}[a-z]{4}\d{2}/).test(str);
			}
		}
	}
}

angular
	.module('app')
	.directive('couponCode', couponCode);
