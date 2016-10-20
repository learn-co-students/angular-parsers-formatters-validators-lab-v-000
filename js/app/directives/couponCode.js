function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$validators.couponCode = function(code) {
        return code.test(/\d{2}[a-z]{4}\d{2}/i);
      }
    }
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
