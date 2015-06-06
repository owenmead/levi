'use strict';

angular.module('leviApp')
  .directive('pieceSelector', function () {

    var controller = function($attrs) {
      this.showSwatchs = false;
      this.selectSwatch('red');
    }
    controller.prototype.openSwatch = function() {
        this.showSwatchs = true;
    };
    controller.prototype.closeSwatchs = function() {
        this.showSwatchs = false;
    };
    controller.prototype.selectSwatch = function(swatch) {
        if (swatch === 'blue') {
            swatch = 'none';
        }
        this.pieceColour = swatch;
    };

    return {
      templateUrl: 'scripts/directives/pieceSelector.html',
      restrict: 'E',
      scope: {},
      controller: controller,
      controllerAs: 'ctrl'
    };
  });
