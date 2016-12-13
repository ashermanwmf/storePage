describe('App', () =>{
  beforeEach(module('app'));

  let scope, $location, createController;

  beforeEach(inject(($rootScope, $controller, _$http_) =>{
    scope = $rootScope.$new();
    $http = _$http_;

    createController = () =>{
      return $controller('AppCtrl', {
        '$scope': scope,
        '$http': $http
      });
    };
  }));

  it('controller should use factory to filter and return true for correct content', () =>{
    let controller = createController();

    //check content is defined
    expect(scope.content).toBe('loading');

    //check filter works for options
    expect(scope.priceFilter(2000)({maxPrice: 2000})).toBe(true);
    expect(scope.priceFilter(2000)({maxPrice: 950})).toBe(false);
    expect(scope.priceFilter(0)({maxPrice: 950})).toBe(true);
  });
}); 