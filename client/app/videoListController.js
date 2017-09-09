myApp.controller("videoListController", ['$window', '$scope', '$http', 'youTube', function ($window, $scope, $http, youTube) {
  $scope.videoList = "future video list"
  $scope.diagnostic = $window.diagnostic;
  let query = $window.searchQuery || "improve timing";
  
  youTube.search({
    q: query,
    maxResults: 5,
    key: 'AIzaSyDyPBWXIuHIeMH9gN-th6bVzJropzkjFpo',
    part: 'snippet'
  }, (response) => {
    console.log(response.data.items);
    $scope.videoList = response.data.items;
  })
  
  

}])

