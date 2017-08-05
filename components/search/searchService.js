app.service('SearchService', function($http) {
  
    var getAllCandidats = function() {
        return $http.get(pathServer+"getAllCandidats");
    };

    var addCandidat = function(objet) {
        return $http.post(pathServer+"addCandidat", objet);
    };
   
    return {
        getAllCandidats : getAllCandidats,
        addCandidat     : addCandidat
    };

});

