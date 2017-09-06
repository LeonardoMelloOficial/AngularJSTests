(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {

  var service = this;

  //Call for all categories
  service.getAllCategories = function(){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function(response){
      var items = response.data;
      return items;
    }).catch(function(error){
      console.log(error);
    });
    return response;
  };

  service.getItemsForCategory = function(categoryShortName){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    }).then(function(response){
      var items = response.data;
      return items;
    }).catch(function(error){
      console.log(error);
    });
    return response;
  };
}

})();
