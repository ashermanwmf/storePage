angular.module('app', [])
  .controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    
    const beginningUrl = 'https://sneakpeeq-sites.s3.amazonaws.com/';

    $scope.content = 'loading';


    $http({
      method: 'GET',
      url: 'https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
    })
    .then((response) =>{
      $scope.content = response.data.products;
    },(err) =>{
      console.log(err);
    });
  }]);