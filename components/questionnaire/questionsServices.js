app.service('QuestionsService', function($http) {
  
    var getAllQuestions = function() {
     return $http.get(pathServer+"getAllQuestions");
   };
   
   return {
       getAllQuestions : getAllQuestions
   };

});
