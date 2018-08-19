(function(){'use strict';angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);LunchCheckController.$inject=['$scope'];function LunchCheckController($scope){$scope.dishes="";$scope.message="Enter the dishes you'd like";$scope.check=function(){var dishes=checkEmptyString($scope.dishes.split(','));if(dishes==0){$scope.message="Please Enter data First";$scope.nada=!0;$scope.other=!1}
else if(dishes<4){console.log("ejecuto el else");console.log(dishes);$scope.message="Enjoy. Ordered foods: "+dishes;$scope.nada=!1;$scope.other=!0}
else{$scope.message="Too much! Ordered foods: "+dishes;$scope.nada=!1;$scope.other=!0}};$scope.checkEnter=function(e){if(e.keyCode==13)$scope.check();return}
function checkEmptyString(array){var words=0;for(var i=0;i<array.length;i++){if(array[i]!=""){console.log("palabra: ",array[i]);words++}
console.log(words)}
return words}}})()