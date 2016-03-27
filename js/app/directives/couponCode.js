function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ngModel){
      ngModel.$validators.formula = function(code){
        return /\d{2}[a-z]{4}\d{2}/i.test(code);
      };
    }
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
