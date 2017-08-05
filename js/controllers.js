app.controller('navBarCtrl', function($rootScope, $scope, $location, $window, $state){
  $scope.logout = function(){
    localStorage.clear();
    $state.go('login');
  }
});

app.controller('homeCtrl', function() {
});
app.controller('loginCtrl', function($rootScope, $scope, $location, $window, $http, $state){
    $scope.loginVerif = function(){
        $http.post(pathServer+"login", $scope.login).success(function (data){
          if(data.return.code){
            localStorage.setItem("sessionId" , data.result.sessionId);
            localStorage.setItem("userInfo", JSON.stringify(data.result));
            localStorage.setItem("userLogin" , data.result.login);
            localStorage.setItem("userId" , data.result.id);
            $rootScope.userProfil = data.result;
            $state.go('home');
          }else{
            localStorage.clear();
            $scope.error=true;
            swal({
                title : "Connexion échouée",
                text  : "Votre login et/ou mot de passe sont incorrectes !<br>Veuillez réessayer ",
                type  : "error",
                html  : true,
              });
          }
        });
    };
});


