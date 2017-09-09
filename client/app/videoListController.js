myApp.controller("videoListController", ['$scope', '$http', 'youTube', function ($scope, $http, youTube) {
  $scope.videoList = "future video list"
  let query = $scope.searchQuery || "improve timing";
  
  youTube.search({
    q: query,
    maxResults: 5,
    key: 'AIzaSyDyPBWXIuHIeMH9gN-th6bVzJropzkjFpo',
    part: 'snippet'
  }, (response) => {
    $scope.videoList = response.data.items;
  })
  
  

}])

