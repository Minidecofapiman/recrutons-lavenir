app.controller('navBarCtrl', function($rootScope, $scope, $location, $window, $state){
  $scope.logout = function(){
    localStorage.clear();
    $state.go('login');
  }
});






