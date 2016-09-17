function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$validators.coupon = function(string) {
        regex = /\d{2}[a-z]{4}\d{2}/
        return regex.test(string)
      }
    }
  }

}

angular
	.module('app')
	.directive('couponCode', couponCode);
