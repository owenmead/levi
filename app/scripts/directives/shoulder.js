'use strict';

/**
 * @ngdoc directive
 * @name leviApp.directive:shoulder
 * @description
 * # shoulder
 */
angular.module('leviApp')
  .directive('shoulder', function () {
    return {
      templateUrl: 'views/shoulder.html',
      restrict: 'E',
      scope: {},
      link: function postLink(scope, element, attrs) {

        scope.showSwatchs = false;

        scope.openSwatch = function() {
            scope.showSwatchs = true;
        }
        scope.closeSwatchs = function() {
            scope.showSwatchs = false;
        }
        scope.selectSwatch = function(swatch) {
            console.log(swatch);
        };
      }
    };
  });
