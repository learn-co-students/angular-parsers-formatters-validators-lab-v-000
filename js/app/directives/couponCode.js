function couponCode() {
  return {
    require: "ngModel",
    restrict: 'A',
    link: function(scope, elem, attrs, ngModel){
      ngModel.$validators.couponCode = function(str){
        return str.test(/\d{2}[a-z]{4}\d{2}/i);
      };
    };
    // /\d{2}[a-z]{4}\d{2}/i
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
