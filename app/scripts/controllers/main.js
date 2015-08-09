'use strict';

angular.module('leviApp')
  .controller('MainCtrl', function ($scope) {
    var data = {
      base: {
        name: 'base',
        imgDir: 'images/base/',
        options: {
          black: {img:'black.png', swatchStyle: 'background: url(images/base/black.png) -143px -16px no-repeat;'},
          neon:  {img:'neon.png',  swatchStyle: 'background: url(images/base/neon.png)  -143px -16px no-repeat;'},
          nude:  {img:'nude.png',  swatchStyle: 'background: url(images/base/nude.png)  -143px -16px no-repeat;'},
          red:   {img:'red.png',   swatchStyle: 'background: url(images/base/red.png)   -143px -16px no-repeat;'},
          white: {img:'white.png', swatchStyle: 'background: url(images/base/white.png) -143px -16px no-repeat;'},
          print: {img:'print.png', swatchStyle: 'background: url(images/base/print.png) -143px -16px no-repeat;'}
        },
        positioning: {
          swatches:     { top: '272px', left: '324px' },
          swatchOpener: { top: '61px',  left: '58px',  width: '264px', height: '617px' },
          pieceImg:     { top: '61px',  left: '58px',  width: '264px', height: '617px' }
        }
      },

      shoulder: {
        name: 'shoulder',
        imgDir: 'images/shoulder/',
        options: {
          black: {img:'black.png', swatchStyle: 'background: url(images/shoulder/black.png) -143px -16px no-repeat;'},
          neon:  {img:'neon.png',  swatchStyle: 'background: url(images/shoulder/neon.png)  -143px -16px no-repeat;'},
          nude:  {img:'nude.png',  swatchStyle: 'background: url(images/shoulder/nude.png)  -143px -16px no-repeat;'},
          red:   {img:'red.png',   swatchStyle: 'background: url(images/shoulder/red.png)   -143px -16px no-repeat;'},
          white: {img:'white.png', swatchStyle: 'background: url(images/shoulder/white.png) -143px -16px no-repeat;'},
          print: {img:'print.png', swatchStyle: 'background: url(images/shoulder/print.png) -143px -16px no-repeat;'}
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
          white: {img:'white.png', swatchStyle: 'background: url(images/topContrast/white.png) -14px -46px no-repeat;'},
          print: {img:'print.png', swatchStyle: 'background: url(images/topContrast/print.png) -14px -46px no-repeat;'}
        },
        positioning: {
          swatches:     { top: '146px', left: '324px' },
          swatchOpener: { top: '146px', left: '82px', width: '168px', height: '112px' },
          pieceImg:     { top: '146px', left: '82px', width: '189px', height: '112px' }
        }
      },

      bottomContrast: {
        name: 'bottomContrast',
        imgDir: 'images/bottomContrast/',
        options: {
          black: {img:'black.png', swatchStyle: 'background: url(images/bottomContrast/black.png) -27px -13px no-repeat;'},
          neon:  {img:'neon.png',  swatchStyle: 'background: url(images/bottomContrast/neon.png)  -27px -13px no-repeat;'},
          nude:  {img:'nude.png',  swatchStyle: 'background: url(images/bottomContrast/nude.png)  -27px -13px no-repeat;'},
          red:   {img:'red.png',   swatchStyle: 'background: url(images/bottomContrast/red.png)   -27px -13px no-repeat;'},
          white: {img:'white.png', swatchStyle: 'background: url(images/bottomContrast/white.png) -27px -13px no-repeat;'},
          print: {img:'print.png', swatchStyle: 'background: url(images/bottomContrast/print.png) -27px -13px no-repeat;'}
        },
        positioning: {
          swatches:     { top: '376px', left: '324px' },
          swatchOpener: { top: '366px', left: '55px', width: '260px', height: '258px' },
          pieceImg:     { top: '366px', left: '55px', width: '260px', height: '258px' }
        }
      },

      piping: {
        name: 'piping',
        imgDir: 'images/piping/',
        options: {
          black: {img:'black.png', swatchStyle: 'background: url(images/piping/black.png) 0px -296px no-repeat;'},
          neon:  {img:'neon.png',  swatchStyle: 'background: url(images/piping/neon.png)  0px -296px no-repeat;'},
          nude:  {img:'nude.png',  swatchStyle: 'background: url(images/piping/nude.png)  0px -296px no-repeat;'},
          red:   {img:'red.png',   swatchStyle: 'background: url(images/piping/red.png)   0px -296px no-repeat;'},
          white: {img:'white.png', swatchStyle: 'background: url(images/piping/white.png) 0px -296px no-repeat;'}
        },
        positioning: {
          swatches:     { top: '217px', left: '318px' },
          swatchOpener: { top: '290px', left: '89px', width: '78px',  height: '65px' },
          pieceImg:     { top: '96px',  left: '89px', width: '234px', height: '266px' }
        }
      }

    };
    $scope.data = data;
  });
