angular.module('myApp')
  .service('youTube', function ($http) {
    var youTube = {};

    youTube.search = (params, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        part: 'snippet',
        params: params,


        type: 'video',
        videoEmbeddable: 'true',
      }).then(function (response) {
        callback(response);
      },
        function (response) {
          console.log('error', response);
        });
    };

    return youTube;

  });
