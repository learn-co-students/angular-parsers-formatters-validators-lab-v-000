function couponCode() {
  return {
    require: "ngModel",
    restrict: 'A',
    link: function(scope, elem, attrs, ngModel){
      ngModel.$validators.coupon = function(str){
        return /\d{2}[a-z]{4}\d{2}/i.test(str)
      }
    }
    // /\d{2}[a-z]{4}\d{2}/i
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
