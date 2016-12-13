(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var service = MenuSearchService;
  var ctrl = this;

  ctrl.searchTerm = '';
  ctrl.items = [];
  ctrl.message = "";
  var defaultEmptyMessage = "Nothing found";

  ctrl.getMatchedMenuItems = function(){
    ctrl.message = "";
    if (!ctrl.searchTerm){
      ctrl.message = defaultEmptyMessage;
      ctrl.items = [];
      return;
    }

    var promise = service.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(function(result){
      if (result.length <= 0){
        ctrl.message = defaultEmptyMessage;
      }
      ctrl.items = result;

    });
  };

  ctrl.removeItem = function(item){
    var index = ctrl.items.indexOf(item)
    ctrl.items.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$filter', '$http', 'ApiBasePath'];
function MenuSearchService($filter, $http, ApiBasePath){
  var service = this;
  service.getMatchedMenuItems = function(searchTerm){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(response){
      var items = response.data;
      var filteredItems = $filter('filter')(items.menu_items, {description: searchTerm});
      return filteredItems;
    }).catch(function(error){
      console.log(error);
    });
    return response;
  };
}

function FoundItemsDirective(){
  var ddo = {
    templateUrl : 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&',
      message: '@'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'ctrl',
    bindToController: true,
    link: FoundItemsDirectiveLink
  };
  return ddo;
}

function FoundItemsDirectiveLink(scope, element, attrs, controller) {

  scope.$watch('ctrl.items',  function (newValue, oldValue){
    if (newValue) {
      fadeInElement("tbody");
    }
    else {
      fadeOutElement("tbody");
    }
  });

  scope.$watch('ctrl.message', function (newValue, oldValue) {
    if (newValue) {
      fadeInElement("div.alert");
    }
    else {
      fadeOutElement("div.alert");
    }
  });

  function fadeInElement(e) {
    var elem = element.find(e);
    elem.fadeIn('slow');
  }


  function fadeOutElement(e) {
    var elem = element.find(e);
    elem.fadeOut('slow');
  }
}


function FoundItemsDirectiveController(){

}

})();
