myApp.controller('usernameController', ['$scope', function($scope) {
  $scope.user = '';
  $scope.userMessage = '';
  $scope.submit = function() {
    if ($scope.username) {
      $scope.user = $scope.username;
      $scope.userMessage = `You have successfully logged in as ${$scope.user}`;
    }
  }
}])