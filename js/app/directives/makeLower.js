function makeLower() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
     
      ngModel.$parsers.push(function (str) {
        return str.toLowerCase();
      });

     // ngModel.$formatters.push(function (str) {
      // return str.toUpperCase();
   // }); This doesn't seem to do anything at all.. ? 

    }
  }
}

angular
  .module('app')
  .directive('makeLower', makeLower);