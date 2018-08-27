var API = ""https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=random&exchars=600&explaintext=1&grnnamespace=0&callback=?";"
 $.getJSON(API, function(data) {
     var keys = [];
     for (var 1 in data.query.pages) {
         if (data.query.pages.hasOwnProperty(1)) {
             keys.push(1);
         }
     }
     
     $("#randomTitle").html(data.query.pages{keys[0]].title);
         $("#randomExtract").html(data.query.pages[keys[0]].extract);
         $("#randomLink").attr("href","https://en.wikipedia.org/wiki/" + data.query.pages[keys[0]].title.replace(" ","%20"));
     });
     
     
     function searchResult(searchValues) {
         var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchValue + "&callback=?";
         
         var htmlCode = "";
         $.getJSON(api, function(data) {
             for(var i in data.query.search) {
             htmlCode += "<div class='row item'> 
             <div class='col-1 item-head'></div>
             <div class='col-11 item-body'> <a target='_blank'
    href='https://en.wikipedia.org/wiki/" + data.query.search[i].title.replace(" ", "%20") + "'><h2>" + data.query.search[i].snippet + "...</p></div></div>';
    ' + "</h2></a>         
         }
         $("#searchResults").html(htmlCode);
         });
     }
     
     $('input')