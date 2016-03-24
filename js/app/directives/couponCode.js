function couponCode() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
// specifying $validators.couponCode to access the errors on this attr in view
			ngModel.$validators.couponCode = function (value) {
				return (/\d{2}[a-z]{4}\d{2}/i).test(value);
			};
		}
	}
}

angular
	.module('app')
	.directive('couponCode', couponCode);


// We also need to make sure the coupon code is correct. This should
// conform to the regular expression /\d{2}[a-z]{4}\d{2}/i (two digits,
// 	then 4 characters, then 2 digits). Add a directive to validate this!
// 	If there's an error with the code, it should be displayed on the view!
