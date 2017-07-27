angular.module('app')
  .directive('makeLower', MakeLower);

  function MakeLower(){
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, $element, $attributes, $controller){

        $controller.$formatters.push(function(str){
          return str.toUpperCase();
        });

        $controller.$parsers.push(function(str){
          return str.toLowerCase();
        });

      }
    }
  }