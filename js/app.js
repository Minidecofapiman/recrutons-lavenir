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
        templateUrl: "components/search/search.html",
        controller: "searchCtrl"
      })
      .state('candidatProfil', {
        url: "/candidatProfil",
        templateUrl: "components/candidatProfil/candidatProfil.html",
        controller: "candidatProfilCtrl"
      })
      .state('questions', {
        url: "/questions",
        templateUrl: "components/questionnaire/questions.html",
        controller: "questionsCtrl"
      })
      .state('monprofil', {
        url: "/monprofil",
        templateUrl: "components/userProfil/userprofil.html",
        controller: "profilCtrl"
      })
});





