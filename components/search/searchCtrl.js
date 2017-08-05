app.controller('searchCtrl', function($rootScope, $scope, $location, $window, $http, $state, SearchService){
    
    console.log('searchCtrl')

    var init = function(){

        console.log('init est appelee')

        // SearchService.getAllCandidats().success(function(data){
        //     // recuperer le json pour l'afficher
        //     $scope.allCandidats = ...
        // });

        $scope.allCandidats = [
            {
                nom    : 'nom1',
                prenom : 'prenom1',
                email  : 'email1',
            },
            {
                nom    : 'nom2',
                prenom : 'prenom2',
                email  : 'email2'
            }
        ]

        

    }
    init()

});