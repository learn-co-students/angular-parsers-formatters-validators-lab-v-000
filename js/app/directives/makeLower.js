function makeLower() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$formatters.push(function(text) {
				return text.toLowerCase();
			});

			ngModel.$parsers.push(function(text) {
				return text.toLowerCase();
			});
		}
	}
}

angular
	.module('app')
	.directive('makeLower', makeLower);
