'use strict';

angular.module('leviApp')
  .directive('dress', function () {
    return {
      template: '<div><img src="images/dress.png" /></div>',
      restrict: 'E'
    };
  });
