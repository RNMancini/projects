$(document).ready(() => {
 $("#random").click(() => {
  return window.open("https://en.wikipedia.org/wiki/special:random");
 });
 
 let endpoint="https://"en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";

function thisWholeThing() {
 $("#search").keypress(e => {
  let searchTerm = $("#search").val();
  let key = e.which;
  
  if (key === 13) {
 $("#results").empty();
   makeRequest();
  }
  
  function makeRequest() {

 $.getJSON({API, function(data)},
 success: data => {
  if(data.query === undefined) {
         $("#results").append('Try Again'); }
         else { let articles = data.query.pages; for (let value of Object.values(articles))
{ $("#results")           
          .append(`<a href="#" onclick="window.open('https://en.wikipedia.org/?curid=${ value.pageid }')" class="list-group-item list-group-item-action flex-column align-items-start">\
			<div class = "d-flex w-80 justify-content-between">\
			<h3  class = "mb-1">${value.title}</h3>\
			</div>\
			<p class="mb-1">${value.extract}</p>\
		</a>`);
}
}
error: errorMsg => {
 $("#results").append(
  '<li class="list-group-item list-group-item-danger">There seems to be an ${ errorMsg.status } error!</li>'
  );
}
  });
 }
});
}
thisWholeThing();
});


          