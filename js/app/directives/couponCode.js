function couponCode() {
	return {
		restric: "A",
		require: "ngModel",
		link: function (scope, element, attrs, ngModel) {
			ngModel.$validators.couponCode = function (value) {
				var regex = (/\d{2}[a-z]{4}\d{2}/i);
				return regex.test(value);
			};
		}
	};
}

angular
	.module('app')
	.directive('couponCode', couponCode);
