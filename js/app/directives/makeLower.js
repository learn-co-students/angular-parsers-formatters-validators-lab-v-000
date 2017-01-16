function makeLower() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel){
      ngModel.$parsers.push(function(s){
        return s.toLowerCase();
      });
    }
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
