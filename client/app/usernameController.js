myApp.controller('usernameController', ['$scope', function($scope) {
  $scope.user = function(username) {
    return `You have successfully logged in as ${username}`;
  }
}])