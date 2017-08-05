app.controller('candidatProfilCtrl', function($rootScope, $scope, $location, $window, $http, $state){
    
    console.log('candidatProfilCtrl')

    var init = function(){
        $scope.newCandidat = {}
    }
    init()

    $scope.enregistrerCandidat = function(){
        console.log($scope.newCandidat)
        // CandidatService.addCandidat().success(function(data){
        //     // OK 
        // });
    }

});