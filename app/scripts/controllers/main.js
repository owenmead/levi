'use strict';

/**
 * @ngdoc function
 * @name leviApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leviApp
 */
angular.module('leviApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
