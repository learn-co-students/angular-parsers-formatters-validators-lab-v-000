function makeLower() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      // make computer-friendly from view
      ngModel.$parsers.push(function(value) {
        return value.toLowerCase();
      });
      // make human-readable friendly from model
      ngModel.$formatters.push(function(value) {
        return value.toLowerCase();
      });
    }
  };
}

angular
	.module('app')
	.directive('makeLower', makeLower);
