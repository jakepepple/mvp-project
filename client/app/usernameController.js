myApp.controller('usernameController', ['$scope', '$http', function($scope, $http) {
  $scope.userMessage = '';
  $scope.submit = function() {
    if ($scope.username) {
      
      $scope.userMessage = `You have successfully logged in as ${$scope.username}`;
      $http.post('/users', {
        username: $scope.username,
        password: $scope.password,
        bestScore: 0
        })
      .then((response) => {
        console.log(response)
        $scope.username = '';
        $scope.password = '';
      }, (error) => {
        console.log(error);
      })
      
    }
  }
}])