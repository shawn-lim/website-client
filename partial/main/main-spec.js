describe('MainCtrl', function () {

  beforeEach(module('angularClient'));

  var scope, ctrl, mockService;

  beforeEach(inject(function ($rootScope, $controller, RealService) {
    scope = $rootScope.$new();

    mockService = RealService;
    ctrl = $controller('MainCtrl', {$scope: scope, RealService: mockService});
  }));

  it('should ...', inject(function () {

    expect("This controller").toBe("fully tested");

  }));

});
