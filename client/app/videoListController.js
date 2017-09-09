myApp.controller("videoListController", ['$scope', '$http', function ($scope, $http) {
  $scope.videoList = "future video list"
  let query = $scope.searchQuery || "improve timing";
  $http({
    method: "GET",
    url: 'https://googleapis.com/youtube/v3/search',
    params: {
      q: query,
      maxResults: 5,
      key: 'AIzaSyDyPBWXIuHIeMH9gN-th6bVzJropzkjFpo',
      part: 'snippet'
    },
    type: 'video',
    videoEmbeddable: 'true'
  }).then(response => {
    console.log(response.data);
  }, error => {
    console.error('youtube search error: ', error);
  })
}])

/*
q: input,
  maxResults: 5,
    key: window.YOUTUBE_API_KEY,
    part: 'snippet'
    */

    /*
    method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        part: 'snippet',
        params: params,


        type: 'video',
        videoEmbeddable: 'true',
    */