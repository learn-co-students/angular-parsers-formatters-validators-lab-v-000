const makeLower = () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, ngModel) => {
      ngModel.$parsers.push(str => {
        return str.toLowerCase()
      })
    }
  }
}

angular
	.module('app')
	.directive('makeLower', makeLower);
