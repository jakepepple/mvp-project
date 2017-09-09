myApp.controller("myscoresController", ['$window', '$scope', '$http', function ($window, $scope, $http) {
  $scope.myScores = "";
  if (!$window.username) {
    $scope.myScores = "You need to login first!"
  } else {
    
    $http({
      method: 'GET',
      url: '/myscores',
      params: {user: $window.username}
    })
    .then((response) => {
      let username = response.data.username;
      let score = response.data.bestScore;
      $scope.myScores = `Username: ${username} | Best Score: ${score}`;
    }, (err) => {
      console.log("scoresController error:", err);
    })
  }
}])