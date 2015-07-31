'use strict';

angular.module('leviApp')
  .directive('pieceSelector', function () {

    var controller = function($attrs, $scope) {
      this.name = $scope.name;
      this.imgDir = $scope.imgDir;
      this.options = $scope.options();
      this.positioning = $scope.positioning();
      this.optionKeys = Object.keys(this.options);

      this.showSwatchs = false;
      this.selectOption(this.options[this.optionKeys[0]]);
    };
    controller.prototype.openSwatch = function() {
        this.showSwatchs = true;
    };
    controller.prototype.closeSwatchs = function() {
        this.showSwatchs = false;
    };
    controller.prototype.selectOption = function(option) {
        this.currentOption = option;
    };

    return {
      templateUrl: 'views/pieceSelector.html',
      restrict: 'E',
      scope: {
        imgDir: '@',
        name: '@',
        options: '&',
        positioning: '&'
      },
      controller: controller,
      controllerAs: 'ctrl'
    };
  });
