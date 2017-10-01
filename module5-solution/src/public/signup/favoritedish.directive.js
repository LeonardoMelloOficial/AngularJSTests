(function (){
"use strict"

angular.module('public')
.directive('favoriteDishValidator', favoriteDishValidator);

favoriteDishValidator.$inject = ['MenuService'];

function favoriteDishValidator (MenuService){
  var $srvc = MenuService;
  var favoriteDishValidator = this;
  return {
    require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function favoriteDishExists(value) {
                var item = $srvc.getMenuItem(value.toUpperCase());
                item.then(function (data) {
                  mCtrl.$setValidity('favoriteDishExists', true)
                  $srvc.setUserSignupFavoriteDishItem(data);
                }, function (error){
                  mCtrl.$setValidity('favoriteDishExists', false)
                  $srvc.setUserSignupFavoriteDishItem(null);

                });
                return value;
            }

            mCtrl.$parsers.push(favoriteDishExists);
        }
  };
}

})();
