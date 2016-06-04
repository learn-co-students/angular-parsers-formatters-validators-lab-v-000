function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$validators.code = function(value) {
        var patt = /\d{2}[a-z]{4}\d{2}/i;
        return patt.test(value);
      };
    }
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
