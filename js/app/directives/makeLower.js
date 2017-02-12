function makeLower() {
	return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elem, attrs, ngModel) {
      ngModel.$parsers.push(function (code) {
        return code.toLowerCase();
      })
      ngModel.$formatters.push(function (code) {
        return code.toLowerCase();
      })
    }
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
