myApp.controller("gameController", ['$scope', '$http', '$interval', '$timeout', '$filter', function ($scope, $http, $interval, $timeout, $filter) {
  $scope.screenPrompt = 'a';
  $scope.countdown = 3;
  $scope.userResults = [];
  $scope.computerResults = [];
  let averageMsOff;
  

  $scope.gameStart = function() {
    console.log('started');
    $scope.screenPrompt = 3;
    $interval(() => {
      $scope.screenPrompt -= 1;
    }, 1000, 3)
      .then(() => {
        $interval(() => {
          $scope.computerResults.push($filter('date')(Date.now(), 's:sss'))
        }, 1000, 10)
        .then(() => {
          let userResults = $scope.userResults;
          let computerResults = $scope.computerResults;
          const convertToMs = function(results) {
            return results.map(timeString => {
              const timeSplit = timeString.split(":");
              let secondsConverted = parseInt(timeSplit[0]) * 1000
              return secondsConverted += parseInt(timeSplit[1]);
              console.log(secondsConverted);
            })
          }
          const compConverted = convertToMs(computerResults);
          const userConverted = convertToMs(userResults);
          console.log(compConverted);
          const allMsOff = compConverted.map((compMs, index) => {
            console.log(compMs);
            console.log(userConverted[index]);
            return compMs -= userConverted[index]
          });
          
          averageMsOff = allMsOff.reduce((sum, curr) => sum + curr, 0) / computerResults.length;
          console.log(allMsOff, averageMsOff);
        });
      })
  }
  $scope.userKeyPress = function() {
    console.log('pressed');
    $scope.userResults.push($filter('date')(Date.now(), 's:sss'))
  }

}])