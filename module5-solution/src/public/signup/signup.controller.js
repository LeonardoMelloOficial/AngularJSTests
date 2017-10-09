(function () {
"use strict"

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', '$scope'];

function SignupController(MenuService, $scope){
  var $ctrl = this;
  var $srvc = MenuService;
  $scope.sucess=false;
  $scope.user = {
    // firstName : 'Leo',
    // lastName : 'Mello',
    // email : 'leo@leo',
    // phone : '999-999-9999',
  };

  $scope.$watch('user', function(error) {
    $scope.sucess = false;
  }, true);

  $scope.test = function(form){
    $srvc.setUserSignup($scope.user);
    $scope.sucess=true;
  }

}

})();
