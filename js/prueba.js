$(document).ready(function () {
  var omdbUrl = 'http://www.omdbapi.com/';
  // http://www.omdbapi.com/?apikey=6cb21a7d&t=star&plot=full
  var apiKey = '6cb21a7d';

  // evento click par el boton search con la funcion de buscar movies y que como parametro de la pagina 1
  $('#shearch-btn').click(function () {
    searchMovies(1);
  });

  // funcion busqueda movies parametro page
  function searchMovies(page) {
    // lo que ingreso en el input
    var str = $('#enter-title').val();

    if (str.length >= 1) {
      $('.navigatePagesButtons').removeClass('hide');
      // Construccion del link escuchando al input y parametros del api omdb
      // '&s=' Título de la película para buscar.
      // '&page=' Número de página para devolver
      var link = omdbUrl + '?apikey=' + apiKey + '&s=' + str + '&page=' + page;

      /* Metodo Ajax (es configurado a través de un objeto,) -- 3 principales parametros*/
      $.ajax({
        type: 'GET', // especifica si será una petición POST o GET
        url: link, // la URL para la petición
        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (res) {
          console.log(res);

          var resultSearch = $('.results');
          resultSearch.html(''); // Limpio el contenedor de la tabla
          var counter = (page * 10 - 10) + 1;
          $.each(res.Search, function (key, p) {
            if (p.Poster == 'N/A') {
              p.Poster = '../assets/images/download.png';
            }
            resultSearch.append('<tr>' +
              '<td>' + counter + '</td>' +
              '<td><img class="minImg" src="' + p.Poster + '"></td>' +
              '<td>' + p.Title + '</td>' +
              '<td>' + p.Type + '</td>' +
              '<td>' + p.Year + '</td>' +
              '</tr>');
            counter++;
          });

          var totalPages = Math.ceil(res.totalResults / 10); // 54 / Ceil = 6
          var pagesButtons = $('#pages');
          pagesButtons.html(''); // Limpio el contenedor 

          for (var i = 0; i < totalPages; i++) {
            pagesButtons.append(
              '<button type="button" page="' + (i + 1) + '" class="btn btn-dark myButton">' + (i + 1) + '</button>'
            );
          };

          $('.myButton').click(function () {
            var page = $(this).attr('page');
            searchMovies(page);
          });

        },
      });
    } else {
      $('.navigatePagesButtons').addClass('hide');
    }
  }

});