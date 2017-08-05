app.controller('candidatProfilCtrl', function($rootScope, $scope, $location, $window, $http, $state, SearchService){
    
    console.log('candidatProfilCtrl')

    var init = function(){
        $scope.newCandidat = {}
    }
    init()

    $scope.enregistrerCandidat = function(){

        console.log($scope.newCandidat)

        SearchService.addCandidat($scope.newCandidat).then(function(response){
            console.log('insertion OK')
        });
    }

});