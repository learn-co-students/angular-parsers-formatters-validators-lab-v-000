function makeLower() {
	return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(str) {
        return str.toLowerCase();
      });
      ngModel
    }
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
