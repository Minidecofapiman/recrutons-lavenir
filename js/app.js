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


app.filter('searchFilter', function () {
  return function (besoins, search) {
    var newListeBesoins = [];
    if (search === undefined || search == "" || search == " ") {
      return besoins;
    } else {
      var searchs = search.split(' ');
    }
    if (besoins) {
      if (searchs.length == 0) {
        return besoins;
      } else {
        for (var i = 0; i < besoins.length; i++) {
          var score = 0;  
          for (var j = 0; j < searchs.length; j++) {
            var str = besoins[i].titre.toLowerCase();
            if ( str.includes(searchs[j].toLowerCase()) ) {
              score++;
            }
          }
          if( score == searchs.length){
              newListeBesoins.push(besoins[i]);
          }
        }
      }
    }
    return newListeBesoins;
  };
});

app.filter('frenchDate', function($filter){
  return function(text){
    if( text == "" || text == undefined || text == null || text == "null"){
      return '--';
    }else{
      return $filter('date')(new Date(text.replace(/-/g,"/")), "dd/MM/yyyy");
    }
  }
});
app.filter('frenchTime', function($filter){
  return function(text){
    if( text == "" || text == undefined || text == null || text == "null"){
      return '--';
    }else{
      return $filter('date')(new Date(text.replace(/-/g,"/")), "dd/MM/yyyy HH:mm");
    }
  }
});
app.filter('entryAndFilter', function(){
  return function(entry, search){
    var newEntry = [];
    if (search === undefined || search == "" || search == " ") {
      return entry;
    } else {
      var searchs = search.toLowerCase().split(' ');
    }
    if (entry) {
      if (searchs.length == 0) {
        return entry;
      } else {
        for(var x = 0; x < entry.length; x++){
            var count = 0;
            var temp = JSON.stringify(entry[x]);
            for(var y = 0; y < searchs.length; y++){
                if(temp.toLowerCase().indexOf(searchs[y]) !== -1){
                    count++;
                }else{
                  break;
                }
            }
            if(count == searchs.length){
                 newEntry.push(entry[x]);   
            }
        }
      }
    }
    return newEntry;
  }
});
function dateFrenchToEnglish(date){
    var dateFr = date.split('/');
    var day = dateFr[0];
    var mounth = dateFr[1];

    var rest = dateFr[2].split(' ');
    var year=rest[0];

    var heure_full=rest[1];
    var heure = heure_full.split(':');
    var hours = heure[0];
    var minute = heure[1];
    // var seconde=heure[2];

    // dateInEnglish=year+'-'+mounth+'-'+day+' '+hours+':'+minute+':'+seconde;
     dateInEnglish=year+'-'+mounth+'-'+day+' '+hours+':'+minute;

    return dateInEnglish;
    // return "2016-06-15 20:32:00";
}
function dateEnglishToFrench(date){
  // var date="2016-06-15 20:32:00";
  var dateFr = date.split('-');
  var year = dateFr[0];
  var mounth = dateFr[1];

  var rest = dateFr[2].split(' ');
  var day=rest[0];

  var heure_full=rest[1];
  var heure = heure_full.split(':');
  var hours = heure[0];
  var minute = heure[1];
  // var seconde = heure[2];

  // dateInFrench=day+'/'+mounth+'/'+year+' '+hours+':'+minute+':'+seconde;
  dateInFrench=day+'/'+mounth+'/'+year+' '+hours+':'+minute;
  return dateInFrench;
  // return "2016-06-15 20:32:00";
}

