angular
	.module('app')
	.directive('makeLower', function(){
		return {
			restrict: 'A', 
			require: 'ngModel', 
			link: function(scope, element, attr, ngModel) {
				ngModel.$parsers.push(function(str){
					return str.toLowerCase();
				});
				ngModel.$formatters.push(function(str){
					return str.toLowerCase();
				})
			}
		}
	});
