function couponCode() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$validators.coupon = function (value) {
				return /\d{2}[a-z]{4}\d{2}/i.test(value);
			};
		}
	}
}

angular
	.module('app')
	.directive('couponCode', couponCode);