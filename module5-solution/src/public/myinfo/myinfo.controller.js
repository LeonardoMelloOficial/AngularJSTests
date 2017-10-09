(function () {
"use strict"

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService', '$scope', 'ApiPath'];

function MyinfoController(MenuService, $scope, ApiPath){
  var $ctrl = this;
  var $srvc = MenuService;
  $scope.user = $srvc.userSignup;
  $scope.signedUp=!angular.equals($scope.user, {});
  $scope.basePath = ApiPath;
  console.log($scope.user);
  console.log($scope.signedUp);
}

})();
