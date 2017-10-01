(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.userSignup = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/'+shortName+'.json')
      .then(function (response) {
        return response.data;
      });
  };

  service.setUserSignup = function (userSignup) {
      service.userSignup.firstName  = userSignup.firstName;
      service.userSignup.lastName  = userSignup.lastName;
      service.userSignup.email  = userSignup.email;
      service.userSignup.phone  = userSignup.phone;
      service.userSignup.favoriteDish  = userSignup.favoriteDish;

  }

  service.setUserSignupFavoriteDishItem = function(favoriteDishItem){
      service.userSignup.favoriteDishItem = favoriteDishItem;
  }

}



})();
