//var article = "election";
var searchTerm = function(article) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=2BCClaQeA098XnXIVM4pVPbG1pdOUdaGYj3wa3qAqPdbgeyf";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  };

  searchTerm("war");