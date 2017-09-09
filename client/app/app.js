const myApp = angular.module('myApp', ['ngRoute']).
  config(['$routeProvider',
    function config($routeProvider) {
      

      $routeProvider.
        when("/login", {
          templateUrl: "../views/login.htm",
          controller: "loginController"
        }).
        when('/scores', {
          
          templateUrl: "../views/scores.htm",
          controller: "scoresController"
        }).
        when('/game', {
          templateUrl: '../views/game.htm',
          controller: 'gameController'
        }).
        when('/myscores', {
          controller: "myscoresController",
          templateUrl: "../views/myscores.htm"
        }).
        otherwise('/login');
    }]);

  