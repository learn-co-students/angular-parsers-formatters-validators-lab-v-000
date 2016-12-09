angular
	.module('app')
	.directive('makeLower', makeLower);

function makeLower() {
	return {
		link: function (scope, element, attrs, ngModel) {
			ngModel.$formatters.push(function(string) {
				return string.toUpperCase();
			});

			ngModel.$parsers.push(function (string) {
				return string.toLowerCase();
			});
      require: 'ngModel',
      restrict: 'A'
		}
	}
}
