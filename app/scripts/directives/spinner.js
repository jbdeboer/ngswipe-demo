'use strict';

angular.module('ngswipeDemoApp')
  .directive('spinner', function () {
    return {
      template: '',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var s = new Spinner({color:'#666', lines: 12}).spin(element[0]);
      }
    };
  });
