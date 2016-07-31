function couponCode() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$validators.coupon = function (value, scope) {
				debugger;
				return /\d{2}[a-z]{4}\d{2}/i.test(value);
			};
		}
	}
}


angular
	.module('app')
	.directive('couponCode', couponCode);


	// function couponCode() {
	//   return {
	//     restrict: 'A',
	//     require: 'ngModel',
	//     link: function (scope, element, attr, ngModel) {
	//       ngModel.$validators.coupon = function (value) {
	//         return /\d{2}[a-z]{4}\d{2}/i.test(value);
	//       };
	//     }
	//   }
	// }
	//
	// angular
	// 	.module('app')
	// 	.directive('couponCode', couponCode);
