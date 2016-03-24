function makeLower() {
	return {
		// directive can only be used as attribute, not element
		restrict: 'A',
		// attribute points to ngModel
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
// must use $parsers not formatter b/c need 2 alter data going into model
// formatter will not affect new input
			ngModel.$formatters.push(function(string) {
				return string.toUpperCase();
			})
			ngModel.$parsers.push(function(string) {
				return string.toLowerCase();
			});
		}
	}
}

angular
	.module('app')
	.directive('makeLower', makeLower);
