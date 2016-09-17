(function(){
'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishesStr='';
  $scope.dishesCount=null;
  $scope.message='';

  $scope.checkIfTooMuch = function(){
    $scope.dishesCount = countNotEmpty(transformInArray($scope.dishes, ","));
    if ($scope.dishesCount===0){
      $scope.message = 'Please enter data first!';
    } else if ($scope.dishesCount > 0  && $scope.dishesCount <= 3){
      $scope.message = 'Enjoy!';
    } else {
      $scope.message = 'Too much!';
    }
  };
}

function transformInArray(someString, separator){
  var str = (someString ? someString : "");
  return str.split(separator);
}

function countNotEmpty(array){
  var dCount = 0;
  angular.forEach(array, function (value){
    if ((value !== null && value.trim().length > 0)){
      dCount++;
    }
  });
  return dCount;
}


})();
