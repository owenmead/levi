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
      },


      trim: {
        name: 'trim',
        imgDir: 'images/trim/',
        options: {
          blue: {img:'blue.png', swatchStyle: 'background-color: #00F;'},
          fir:  {img:'fir.png',  swatchStyle: 'background-color: #F0F;'},
          grey: {img:'grey.png', swatchStyle: 'background-color: #F00;'}
        },
        positioning: {
          swatches: {left: '32px', top: '115px' },
          swatchOpener: { top: '77px', left: '65px', height: '124px', width: '145px' },
          pieceImg: { top: '74px', left: '71px', width: '152px', height: '131px' }
        }
      }





    };
    $scope.data = data;
  });
