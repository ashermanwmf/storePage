angular.module('app', [])
  .controller('AppCtrl', ['$scope', '$http', 'priceFilter', function($scope, $http, priceFilter) {
    
    $scope.content = 'loading';
    $scope.priceFilter = priceFilter.priceFilter;

    $http({
      method: 'GET',
      url: 'https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
    })
    .then((response) =>{
      $scope.content = response.data.products;
    },(err) =>{
      console.log(err);
    });

  }])
  .factory('priceFilter', [ function() {

    const priceFilter = (val) =>{
      return (item) =>{
        if(val === undefined) return true;
        return item.maxPrice >= val;
      };
    };

    return {
      priceFilter: priceFilter
    };
  }]);
