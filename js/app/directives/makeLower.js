function MakeLower() {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$formatters.push(function(str){
				return str.toLowerCase();
			})
		}
	}
}

angular
	.module('app')
	.directive('makeLower', MakeLower);
