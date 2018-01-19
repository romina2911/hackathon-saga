
alert('hola');

$(document).ready(function () {
    Firebase.database().ref('colecciones').on('value', function (snapshot) {
        var arr = Object.keys(snapshot.val());
        console.log(snapshot.val()[0]['colecciones'])



    });
});