function couponCode() {
		var CODE_REGEXP = /\d{2}[a-z]{4}\d{2}/i;
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            ctrl.$validators.couponCode = function (value) {
				return CODE_REGEXP.test(value);
			}
		}
	}
}

angular
	.module('app')
	.directive('couponCode', couponCode);
