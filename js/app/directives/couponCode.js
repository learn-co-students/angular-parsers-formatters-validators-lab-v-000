function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ngModel) {
      ngModel.$validators.couponCode = function(modelvalue, viewvalue) {
        return (/\d{2}[a-z]{4}\d{2}/i).test(modelvalue);
      }
    }
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
