


$(document).ready(function () {
    var provider = new firebase.auth.GoogleAuthProvider();// es una var global

    $('#start').on('click', function () {
        firebase.auth().signInWithPopup(provider).then(function(result) {
          
        });

    });


    $('#boton').on('click', function () {
        firebase.database().ref('colecciones').on('value', function (snapshot) {
            var arr = Object.keys(snapshot.val());
            console.log(Object.keys(snapshot.val()));

        });
       
        
    });
});