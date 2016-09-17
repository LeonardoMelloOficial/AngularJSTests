(function(){
'use strict'

angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope){
  $scope.name='Leo';
  $scope.sayHelo = function(){
    return 'Hi mother fucker!'
  };
});

})();
