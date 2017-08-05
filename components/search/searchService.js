app.service('SearchService', function($http) {
  
    var getAllCandidats = function() {
     return $http.get(pathServer+"getAllCandidats");
   };
   
   return {
       getAllCandidats : getAllCandidats
   };

});

