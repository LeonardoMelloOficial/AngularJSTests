(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menuapp/components/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
