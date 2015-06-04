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
        //element.text('this is the shoulder directive');
      }
    };
  });
