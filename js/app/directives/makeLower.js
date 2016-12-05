function makeLower() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, ele, attrs, ngModel) {
			ngModel.$parsers.push(function(value){
				return value.toLowerCase()
			})
		}
	}
}


angular
	.module('app')
	.directive('makeLower', makeLower);
