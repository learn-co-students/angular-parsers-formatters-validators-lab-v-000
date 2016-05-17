function couponCode() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ngModel){

      ngModel.$parsers.push(function(coupon){
        return coupon.toLowerCase();
      });

      ngModel.$validators.coupon = function (value) {
        return /\d{2}[a-z]{4}\d{2}/i.test(value);
      };

    }
  };
}

angular
	.module('app')
	.directive('couponCode', couponCode);
