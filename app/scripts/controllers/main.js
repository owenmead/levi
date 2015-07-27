'use strict';

angular.module('leviApp')
  .controller('MainCtrl', function ($scope) {
    var data = {
      shoulder: {
        name: 'shoulder',
        imgDir: 'images/shoulder/',
        options: {
          black: {img:'black.png', swatchStyle: 'background: url(images/shoulder/black.png) -143px -16px no-repeat;'},
          neon:  {img:'neon.png',  swatchStyle: 'background: url(images/shoulder/neon.png)  -143px -16px no-repeat;'},
          nude:  {img:'nude.png',  swatchStyle: 'background: url(images/shoulder/nude.png)  -143px -16px no-repeat;'},
          red:   {img:'red.png',   swatchStyle: 'background: url(images/shoulder/red.png)   -143px -16px no-repeat;'},
          white: {img:'white.png', swatchStyle: 'background: url(images/shoulder/white.png) -143px -16px no-repeat;'}
        },
        positioning: {
          swatches:     { top: '62px', left: '324px' },
          swatchOpener: { top: '50px', left: '95px', width: '236px', height: '240px' },
          pieceImg:     { top: '60px', left: '82px',  width: '240px', height: '251px' }
        }
      },

      topContrast: {
        name: 'topContrast',
        imgDir: 'images/topContrast/',
        options: {
          black: {img:'black.png', swatchStyle: 'background: url(images/topContrast/black.png) -14px -46px no-repeat;'},
          neon:  {img:'neon.png',  swatchStyle: 'background: url(images/topContrast/neon.png)  -14px -46px no-repeat;'},
          nude:  {img:'nude.png',  swatchStyle: 'background: url(images/topContrast/nude.png)  -14px -46px no-repeat;'},
          red:   {img:'red.png',   swatchStyle: 'background: url(images/topContrast/red.png)   -14px -46px no-repeat;'},
          white: {img:'white.png', swatchStyle: 'background: url(images/topContrast/white.png) -14px -46px no-repeat;'}
        },
        positioning: {
          swatches:     { top: '146px', left: '324px' },
          swatchOpener: { top: '146px', left: '82px', width: '168px', height: '112px' },
          pieceImg:     { top: '146px', left: '82px', width: '189px', height: '112px' }
        }
      },

    };
    $scope.data = data;
  });
