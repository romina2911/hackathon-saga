$(document).ready(function(){

   /* var omdb_url = 'http://www.omdbapi.com/'
    var api_key = '6cb21a7d';
    
    $('#movie-button').keypress(function(e){
      str += e.key;
      if(str.length >= 3){
        $.ajax({
          type: 'GET',
          url: `${omdb_url}?apikey=${api_key}&t=${str}`,
          success: function(res){
            console.log(res)
            $('.movie-div').empty();
            var img = $('<img>');
            img.attr('src', res.Poster);
            img.width('auto');
            img.height('250px');
  
            var title = $('<p>');
            title.text("Movie Title: " + res.Title);
  
            var year = $('<p>');
            year.text("Released: " + res.Year)
  
            var actors = $('<p>');
            actors.text("Starring: " + res.Actors);
  
            var director = $('<p>');
            director.text("Director: " + res.Director);
  
            var ratingsList = $('<ul>')
            ratingsList.html('<strong style="font-size: 26px">Ratings</strong>')
            var ratingsLi;
            for(var i = 0; i < res.Ratings.length; i++){
              ratingsLi = $('<li>');
              ratingsLi.text(res.Ratings[i].Source + ": " + res.Ratings[i].Value);
              ratingsList.append(ratingsLi);
            }
  
            movieDiv.append(img).append(title).append(year).append(actors).append(director).append(ratingsList);
            $('div').eq(0).append(movieDiv);
          }
        })
      }
    })*/
    


  
  });

  