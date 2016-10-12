function makeLower() {
	return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ngModel) {
      ngModel.$parsers.push(function(coupon) {
        return coupon.toLowerCase();
      });

      ngModel.$formatters.push(function(coupon) {
        return coupon.toUpperCase();
      });
    }
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
