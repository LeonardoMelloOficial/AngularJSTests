(function () {
'use strict';

angular.module('MenuApp')
.service()
.controller('CategoriesMenuController', CategoriesMenuController);


CategoriesMenuController.$inject = ['MenuDataService', 'categories'];
function CategoriesMenuController(MenuDataService, categories) {
  var ctrl = this;
  ctrl.categories = categories;
}

})();
