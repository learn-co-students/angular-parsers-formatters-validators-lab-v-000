function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ngModel){
      ngModel.$validators.coupon = function(coupon){
        // return coupon.test(/\d{2}[a-z]{4}\d{2}/i);
        return /\d{2}[a-z]{4}\d{2}/i.test(coupon);
      }
    }
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
