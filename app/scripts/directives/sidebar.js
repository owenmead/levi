'use strict';

angular.module('leviApp')
  .directive('sidebar', function() {
  	return {
  		templateUrl: 'views/sidebar.html',
  		restrict: 'E'
  	};
  });
