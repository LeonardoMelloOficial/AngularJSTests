(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/menuapp/components/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
