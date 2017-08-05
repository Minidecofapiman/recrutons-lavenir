var pathServer = "https://back-nj.piman-consultants.fr/";


var app = angular.module('appSample', ['ui.router'
                          ]);

app.run(function($rootScope, $http, $location, $state) {

  $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      $rootScope.previousState = from.name;
      $rootScope.currentState = to.name;
  });

});


app.config(function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "components/login/login.html",
        controller: "loginCtrl"
      })
      .state('home', {
        url: "/home",
        templateUrl: "components/home/home.html",
        controller: "homeCtrl"
      })
      .state('search', {
        url: "/search",
        templateUrl: "pages/search.html",
        controller: "homeCtrl"
      })
      .state('candidatProfil', {
        url: "/candidatProfil",
        templateUrl: "pages/candidatProfil.html",
        controller: "homeCtrl"
      })
      .state('questions', {
        url: "/questions",
        templateUrl: "pages/questions.html",
        controller: "homeCtrl"
      })
      .state('monprofil', {
        url: "/monprofil",
        templateUrl: "pages/userprofil.html",
        controller: "homeCtrl"
      })
});





