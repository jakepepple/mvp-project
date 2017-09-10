myApp.controller("videoListController", ['$window', '$scope', '$http', 'youTube', function ($window, $scope, $http, youTube) {
  $scope.videoList = "";
  $scope.diagnostic = $window.diagnostic || "You haven't played the game yet! Go play and come back for personalized results.";
  let query = $window.query || "improve timing";
  
  if ($window.diagnostic) {
    youTube.search({
      q: query,
      maxResults: 5,
      key: 'AIzaSyDyPBWXIuHIeMH9gN-th6bVzJropzkjFpo',
      part: 'snippet'
    }, (response) => {
      console.log(response.data.items);
      $scope.videoList = response.data.items;
    })
  
  }

}])

