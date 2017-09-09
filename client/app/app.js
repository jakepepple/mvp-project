const myApp = angular.module('myApp', ['ngRoute']).
  config(['$routeProvider',
    function config($routeProvider) {
      

      $routeProvider.
        when('/scores', {
          
          templateUrl: "../views/scores.htm",
          controller: "scoresController"
        }).
        when('/game', {
          template: '<div ng-controller="gameController"></div>'
        }).
        otherwise('/');
    }]);

  