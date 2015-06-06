'use strict';

angular.module('leviApp')
  .directive('pieceSelector', function () {
    return {
      templateUrl: 'scripts/directives/pieceSelector.html',
      restrict: 'E',
      scope: {},
      controller: function($scope, $attrs) {
        console.log($attrs);
        $scope.showSwatchs = false;
        $scope.openSwatch = function() {
            $scope.showSwatchs = true;
        };
        $scope.closeSwatchs = function() {
            $scope.showSwatchs = false;
        };
        $scope.selectSwatch = function(swatch) {
            if (swatch === 'blue') {
                swatch = 'none';
            }
            $scope.pieceColour = swatch;
        };
        $scope.selectSwatch('blue');
      }
    };
  });
