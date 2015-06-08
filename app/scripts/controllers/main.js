'use strict';

angular.module('leviApp')
  .controller('MainCtrl', function ($scope) {
    var data = {
      shoulder: {
        name: 'shoulder',
        imgDir: 'images/shoulder/',
        options: {
          green:  {img:'green.png',  swatchStyle: 'background: url(images/shoulder/green.png) -43px -16px no-repeat;'},
          blue:   {img:'none.png',   swatchStyle: 'background: url(images/shoulder/blue.png) -43px -16px no-repeat;'},
          purple: {img:'purple.png', swatchStyle: 'background: url(images/shoulder/purple.png) -43px -16px no-repeat;'},
          red:    {img:'red.png',    swatchStyle: 'background: url(images/shoulder/red.png) -43px -16px no-repeat;'},
          yellow: {img:'yellow.png', swatchStyle: 'background: url(images/shoulder/yellow.png) -43px -16px no-repeat;'}
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
          blue: {img:'blue.png', swatchStyle: 'background: url(images/trim/blue.png) -13px -74px no-repeat;'},
          fir:  {img:'fir.png',  swatchStyle: 'background: url(images/trim/fir.png) -13px -74px no-repeat;'},
          grey: {img:'grey.png', swatchStyle: 'background: url(images/trim/grey.png) -13px -74px no-repeat;'}
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
