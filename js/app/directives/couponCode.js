function couponCode() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.coupon = function (val) {
                return (/\d{2}[a-z]{4}\d{2}/i).test(val);
            };
        }
    }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
