'use strict';

angular.module('leviApp')
  .directive('clickPrompt', function () {

    var controller = function() {
      console.log(this);
      this.style = {
        left: this.left + 'px',
        top: this.top + 'px'
      }
    }

    return {
      scope: {
        left: '@',
        top: '@',
        timeout: '@'
      },
      template: '<div class="clickPrompt" ng-style="ctrl.style">Click Me</div>',
      restrict: 'E',
      controller: controller,
      controllerAs: 'ctrl',
      bindToController: true
    };
  });
