myApp.controller("scoresController", ['$scope', '$http', function($scope, $http) {
  $scope.scores = "hello"
  $http.get('/scores', {})
    .then((response) => {
      
      $scope.scores = response.data
    }, (err) => {
      console.log("scoresController error:", err);
    })
}])