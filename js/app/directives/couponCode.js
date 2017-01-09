function couponCode() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attrs, ngModel) {
			ngModel.$validators.couponCode = function (value) {

				var regex = /\d{2}[a-z]{4}\d{2}/i;
				console.log(regex.test(value))
				return regex.test(value);
			};
		}
	};
}

angular
	.module('app')
	.directive('couponCode', couponCode);
