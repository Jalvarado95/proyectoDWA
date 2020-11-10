
// click abrir cerrar api messenger
$(".chat-button").on('click', function(e){
    e.preventDefault();
    $(".chat-content").slideToggle('fast');
});

// funcion para cargar la api de google map
function iniciarMap(){
    var coord = {lat:13.674199 ,lng: -89.278822}; //coordenadas
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}