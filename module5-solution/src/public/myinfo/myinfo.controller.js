(function () {
"use strict"

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService', '$scope', 'ApiPath'];

function MyinfoController(MenuService, $scope, ApiPath){
  var $ctrl = this;
  var $srvc = MenuService;
  $scope.sucess=false;
  $scope.user = $srvc.userSignup;
  $scope.basePath = ApiPath;
  console.log($scope.user);
}

})();
