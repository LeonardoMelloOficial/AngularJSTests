(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuy - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ctrl = this;
  var service = ShoppingListCheckOffService;

  ctrl.items = service.getToBuyItems();

  ctrl.buyItem = function(itemIndex){
    service.buyItem(itemIndex)
  }
}


// Bought - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var ctrl = this;
  ctrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItens = [
      { name: "cookies", quantity: 10 },
      { name: "candies", quantity: 5 },
      { name: "waffles", quantity: 5 },
      { name: "soda", quantity: 10 },
      { name: "beer", quantity: 2000 }
  ];

  var boughtItens = [];

  service.buyItem = function(itemIndex){
    boughtItens.push(toBuyItens[itemIndex]);
    toBuyItens.splice(itemIndex,1);
  }

  service.getToBuyItems = function(){
    return toBuyItens;
  };

  service.getBoughtItems = function(){
    return boughtItens;
  };


  // service.addItem = function (itemName, quantity) {
  //   if ((maxItems === undefined) ||
  //       (maxItems !== undefined) && (items.length < maxItems)) {
  //     var item = {
  //       name: itemName,
  //       quantity: quantity
  //     };
  //     items.push(item);
  //   }
  //   else {
  //     throw new Error("Max items (" + maxItems + ") reached.");
  //   }
  // };
  //
  // service.removeItem = function (itemIndex) {
  //   items.splice(itemIndex, 1);
  // };
  //
  // service.getItems = function () {
  //   return items;
  // };
}

})();
