app.controller('questionsCtrl', function($rootScope, $scope, $location, $window, $http, $state ){
    
    console.log('questionsCtrl')

    var init = function(){

        console.log('init est appelee')

        // SearchService.getAllCandidats().success(function(data){
        //     // recuperer le json pour l'afficher
        //     $scope.allCandidats = ...
        // });

        $scope.allQuestions = [
            {
                question : "un candidat c'est quoi ?"
            },
            {
                question : "un candidat c'est quoi rvrvrrvr?"
            }
        ]

        

    }
    init()

});