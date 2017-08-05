app.filter('frenchDate', function($filter){
  return function(text){
    if( text == "" || text == undefined || text == null || text == "null"){
      return '--';
    }else{
      return $filter('date')(new Date(text.replace(/-/g,"/")), "dd/MM/yyyy");
    }
  }
});

app.filter('frenchTime', function($filter){
  return function(text){
    if( text == "" || text == undefined || text == null || text == "null"){
      return '--';
    }else{
      return $filter('date')(new Date(text.replace(/-/g,"/")), "dd/MM/yyyy HH:mm");
    }
  }
});

app.filter('entryAndFilter', function(){
  return function(entry, search){
    var newEntry = [];
    if (search === undefined || search == "" || search == " ") {
      return entry;
    } else {
      var searchs = search.toLowerCase().split(' ');
    }
    if (entry) {
      if (searchs.length == 0) {
        return entry;
      } else {
        for(var x = 0; x < entry.length; x++){
            var count = 0;
            var temp = JSON.stringify(entry[x]);
            for(var y = 0; y < searchs.length; y++){
                if(temp.toLowerCase().indexOf(searchs[y]) !== -1){
                    count++;
                }else{
                  break;
                }
            }
            if(count == searchs.length){
                 newEntry.push(entry[x]);   
            }
        }
      }
    }
    return newEntry;
  }
});

app.filter('searchFilter', function () {
  return function (besoins, search) {
    var newListeBesoins = [];
    if (search === undefined || search == "" || search == " ") {
      return besoins;
    } else {
      var searchs = search.split(' ');
    }
    if (besoins) {
      if (searchs.length == 0) {
        return besoins;
      } else {
        for (var i = 0; i < besoins.length; i++) {
          var score = 0;  
          for (var j = 0; j < searchs.length; j++) {
            var str = besoins[i].titre.toLowerCase();
            if ( str.includes(searchs[j].toLowerCase()) ) {
              score++;
            }
          }
          if( score == searchs.length){
              newListeBesoins.push(besoins[i]);
          }
        }
      }
    }
    return newListeBesoins;
  };
});
