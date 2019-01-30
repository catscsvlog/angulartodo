var mainapp = angular.module("GroceryList", []);

mainapp.controller("myCtrl", function($scope){
  // No Product At first
  $scope.productlist = ['item'];

  $scope.addItem = function () {
    $scope.error = ""
    if (!$scope.addMe){
      return;
    }
    if($scope.productlist.indexOf($scope.addMe) == -1){
      $scope.productlist.push($scope.addMe);
    }else{
      $scope.error = "The item Already Exists"
    }
  }
  $scope.removeItem = function (x) {
    $scope.error = "";
    $scope.productlist.splice(x, 1);
  }
})
