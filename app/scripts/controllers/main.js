'use strict';

angular.module('leviApp')
  .controller('MainCtrl', function ($scope) {
    var data = {
      shoulder: {
        imgDir: "images/shoulder/",
        options: {
          green:  {img:'green.png',  style: 'background-color: #0F0;'},
          blue:   {img:'none.png',   style: 'background-color: #00F;'},
          purple: {img:'purple.png', style: 'background-color: #F0F;'},
          red:    {img:'red.png',    style: 'background-color: #F00;'},
          yellow: {img:'yellow.png', style: 'background-color: #FF0;'}
        }
      }
    }
    $scope.data = data;
  });
