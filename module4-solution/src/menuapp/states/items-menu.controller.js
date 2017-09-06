(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsMenuController', ItemsMenuController);


ItemsMenuController.$inject = ['$stateParams', 'items'];
function ItemsMenuController($stateParams, items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
