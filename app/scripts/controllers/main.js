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
        },
        positioning: {
          swatches: {left: '350px', top: '52px' },
          swatchOpener: { top: '50px', left: '215px', height: '200px', width: '133px' },
          pieceImg: { top: '53px', left: '207px', width: '144px', height: '276px' }
        }
      }
    }
    $scope.data = data;
  });
