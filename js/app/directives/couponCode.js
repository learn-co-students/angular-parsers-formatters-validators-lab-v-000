function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elem, attrs, ngModel) {
      ngModel.$validators.coupon = function (code) {
        return code.test(/\d{2}[a-z]{4}\d{2}/i);
      }
    };
  };
}

angular
	.module('app')
	.directive('couponCode', couponCode);
