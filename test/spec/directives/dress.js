'use strict';

describe('Directive: dress', function () {

  // load the directive's module
  beforeEach(module('leviApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dress></dress>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dress directive');
  }));
});
