app.controller('searchCtrl', function($rootScope, $scope, $location, $window, $http, $state, SearchService){
    
    console.log('searchCtrl')

    var init = function(){

        console.log('init est appelee')

        SearchService.getAllCandidats().then(function(response){
            $scope.allCandidats = response.data;
        });

    }
    init()

});