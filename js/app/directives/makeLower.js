function makeLower() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(input) {
                return input ? input.toLowerCase() : "";
            });
            element.css("text-transform","lowercase");

    }
  }
	
}

angular
	.module('app')
	.directive('makeLower', makeLower);
