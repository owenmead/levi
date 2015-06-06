'use strict';

angular.module('leviApp')
  .directive('pieceSelector', function () {
    return {
      templateUrl: 'scripts/directives/pieceSelector.html',
      restrict: 'E',
      scope: {},
      link: function postLink(scope, element, attrs) {

        scope.showSwatchs = true;

        scope.openSwatch = function() {
            scope.showSwatchs = true;
        };
        scope.closeSwatchs = function() {
            scope.showSwatchs = false;
        };
        scope.selectSwatch = function(swatch) {
            if (swatch === 'blue') {
                swatch = 'none';
            }
            scope.pieceColour = swatch;
        };

        scope.selectSwatch('blue');
      }
    };
  });
