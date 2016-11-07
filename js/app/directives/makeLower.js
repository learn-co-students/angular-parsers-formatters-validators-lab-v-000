function makeLower() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function(scope, elem, attrs, ngModel){
      ngModel.$parsers.push(function(str){
        return str.toLowerCase();
      });

      // ngModel.$formatters.push(function(str){
      //   return str.toUpperCase();
      // });
    };
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
