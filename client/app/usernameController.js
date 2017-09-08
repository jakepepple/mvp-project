myApp.controller('usernameController', ['$scope', '$http', function($scope, $http) {
  $scope.user = '';
  $scope.userMessage = '';
  $scope.submit = function() {
    if ($scope.username) {
      $scope.user = $scope.username;
      $scope.userMessage = `You have successfully logged in as ${$scope.user}`;
      $http.post('/users', {
        username: $scope.user,
        bestScore: 0
        }).then(() => {
        
      }, () => {})
    }
  }
}])