myApp.controller('usernameController', ['$window', '$scope', '$http', function($window, $scope, $http) {
  $scope.userMessage = '';
  $scope.submit = function() {
    if ($scope.username) {
      $window.username = $scope.username;
      console.log($window.username);
      $scope.userMessage = `You have successfully logged in as ${$scope.username}`;
      $http.post('/users', {
        username: $scope.username,
        password: $scope.password,
        bestScore: 0
        })
      .then((response) => {
        console.log(response)
        // $scope.username = '';
        $scope.password = '';
      }, (error) => {
        console.log(error);
      })
      
    }
  }
}])