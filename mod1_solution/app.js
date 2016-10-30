(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = '';
    $scope.inputStatus = '';
    $scope.textStatus = '';

    $scope.lunchCheck = function() {
        $scope.items = [];
        $scope.items = $scope.lunchItems.split(",");
        $scope.items = $scope.items.filter(function(v){return v!==''});

        if($scope.items.length === 0){
          $scope.message = 'Please enter data first';
          $scope.inputStatus = 'error';
          $scope.textStatus = 'danger';
        }else if($scope.items.length > 0 && $scope.items.length <= 3){
          $scope.message = 'Enjoy!';
          $scope.inputStatus = 'success';
          $scope.textStatus = 'success';
        }else if($scope.items.length > 3){
          $scope.message = 'Too much!';
          $scope.inputStatus = 'success';
          $scope.textStatus = 'success';
        }
    };

  }
})();
