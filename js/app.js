(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']; 
function LunchCheckController($scope) {
$scope.dishes = "";
    $scope.check = function () {
        var dishes = checkEmptyString($scope.dishes.split(','));
        //console.log(dishes.length);
        if (dishes == 0) {
            $scope.message="Please Enter data First";
            $scope.nada = true;
            $scope.other = false;            
        }
        else if (dishes < 4) {
            console.log("ejecuto el else");
            console.log(dishes);
            $scope.message = "Enjoy. Ordered foods: " + dishes;
            $scope.nada = false;
            $scope.other = true;
        }
        else {
            $scope.message = "Too much! Ordered foods: " + dishes;
            $scope.nada = false;
            $scope.other = true;            
        }
        
    };

    function checkEmptyString(array) {
        var words = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] != "") {
                console.log("palabra: ", array[i]);
                words++;
            }
            console.log(words);
        }
        return words;
    }
}

})();