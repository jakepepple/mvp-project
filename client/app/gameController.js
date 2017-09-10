myApp.controller("gameController", ['$window', '$scope', '$http', '$interval', '$timeout', '$filter', function ($window, $scope, $http, $interval, $timeout, $filter) {
  $scope.screenPrompt = 'Wait!';
  $scope.userResults = [];
  $scope.computerResults = [];
  $scope.resultMessage = "";
  $window.diagnostic;
  $window.query;
  let averageMsOff;
  
  const calculateMsOff = (userResults, computerResults) => {
    const convertToMs = function (results) {
      return results.map(timeString => {
        const timeSplit = timeString.split(":");
        let secondsConverted = parseInt(timeSplit[0]) * 1000
        return secondsConverted += parseInt(timeSplit[1]);
      })
    }
    const compConverted = convertToMs(computerResults);
    const userConverted = convertToMs(userResults);
    const allMsOff = compConverted.map((compMs, index) => compMs -= userConverted[index]);
    averageMsOff = allMsOff.reduce((sum, curr) => sum + curr, 0) / computerResults.length;
    return averageMsOff;
  }
  
  const renderResultMessage = (avgDiff) => {
    if (avgDiff > -100 && avgDiff < 100) {
      if (avgDiff < 0) {
        avgDiff = -avgDiff;
      }
      $scope.resultMessage = `Great job! Your timing was within ${avgDiff} milliseconds of the computer. Keep trying for a better score though!`;
      $window.diagnostic = "Keep practicing!"
      
    } else if (avgDiff < -100) {
      $scope.resultMessage = `Your timing was late by an average of ${-avgDiff} milliseconds. Go check out the videos tab to see resources for improvement.`;
      $window.diagnostic = "Tendency to be late. Work on not slowing down with these videos:";
      $window.query = "how to avoid dragging timing lesson";
    } else if (avgDiff > 100) {
      $scope.resultMessage = `Your timing was early by an average of ${avgDiff} milliseconds. Go check out the videos tab to see resources for improvement.`
      $window.diagnostic = "Tendency to be early. Work on not rushing with these videos:";
      $window.query = "how to stop rushing";
    }
  }

  const postResults = (result) => {
    $http.put('/users', {
      username: $window.username,
      bestScore: result
    }).then((response) => {
      console.log('successful put');
    })
  }

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
        $timeout(() => {

          if ($scope.computerResults.length > $scope.userResults.length) {
            $scope.resultMessage = "You missed one! Try again.";
          } else if ($scope.computerResults.length < $scope.userResults.length) {
            $scope.resultMessage = "Too many clicks! Try again.";
          } else {
            let avgDiff = calculateMsOff($scope.userResults, $scope.computerResults);          
            renderResultMessage(avgDiff);
            postResults(avgDiff);
          }
        }, 1000)
      });
    })
  }
  $scope.userKeyPress = function() {
    console.log('pressed');
    $scope.userResults.push($filter('date')(Date.now(), 's:sss'))
  }

}])