'use strict';

angular.module('leviApp')
  .directive('clickPrompt', function () {

    var controller = function($timeout, $interval, $scope) {
      this.style = {
        left: this.left + 'px',
        top: this.top + 'px'
      };

      var pulse;
      var prompt = $timeout(function() {
        this.cssClass = 'show';
        pulse = $interval(function() {
          this.cssClass = (this.cssClass === 'show') ? 'show pulse' : 'show';
        }.bind(this), 1000);
      }.bind(this), this.timeout);

      $scope.$on('openSwatch', function() {
        $timeout.cancel(prompt);
        $interval.cancel(pulse);
        this.disabled = true;
      }.bind(this));
    };

    return {
      scope: {
        left: '@',
        top: '@',
        timeout: '@'
      },
      template: '<div ng-hide="ctrl.disabled" class="clickPrompt" ng-class="ctrl.cssClass" ng-style="ctrl.style"><img src="images/touchWhite.png" /></div>',
      restrict: 'E',
      controller: controller,
      controllerAs: 'ctrl',
      bindToController: true
    };
  });
