'use strict';

angular.module('leviApp')
  .controller('MainCtrl', function ($scope) {
    var data = {
      shoulder: {
        name: 'shoulder',
        imgDir: 'images/shoulder/',
        options: {
          green:  {img:'green.png',  swatchStyle: 'background-color: #0F0;'},
          blue:   {img:'none.png',   swatchStyle: 'background-color: #00F;'},
          purple: {img:'purple.png', swatchStyle: 'background-color: #F0F;'},
          red:    {img:'red.png',    swatchStyle: 'background-color: #F00;'},
          yellow: {img:'yellow.png', swatchStyle: 'background-color: #FF0;'}
        }
      }
    }
    $scope.data = data;
  });
