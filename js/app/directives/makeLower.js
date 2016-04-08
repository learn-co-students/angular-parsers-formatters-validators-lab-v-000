function makeLower() {
	return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel){
      ngModel.$parsers.push(function (string){
        return string.toLowerCase();
      });
     ngModel.$formatters.push(function (string){
        return string.toLowerCase(); 
      });
    }
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
