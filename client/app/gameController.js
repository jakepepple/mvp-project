myApp.controller("gameController", ['$scope', '$http', function ($scope, $http) {
  $scope.screenPrompt = 'a';

  $scope.gameStart = function() {
    console.log('started');
  }
}])