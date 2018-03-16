function makeLower() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$formatters.push(function (str) {
				return str.toUpperCase();
			});

			ngModel.$parsers.push(function (str) {
				return str.toLowerCase();
			});
		}
	}
}

angular
	.module('app')
	.directive('makeLower', makeLower);