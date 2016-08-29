function makeLower() {
	return {
		restrict: "A",
		require: "ngModel",
		link: function(scope, element, attr, ngModel){
			ngModel.$parsers.push(function(str){
				return str.toLowerCase();
			});
		}
	}
}

angular
	.module('app')
	.directive('makeLower', makeLower);
