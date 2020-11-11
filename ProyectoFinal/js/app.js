//variable para capturar coordenadas de usuario
let map;

// click abrir cerrar api messenger
$(".chat-button").on('click', function(e){
    e.preventDefault();
    $(".chat-content").slideToggle('fast');
});

// funcion para cargar la api de google map con las coordenadas de itca
function iniciarMap(){
  const coord = {lat:13.674199 ,lng: -89.278822}; //coordenadas de Itca
  map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  const marker1 = new google.maps.Marker({
    position: coord,
    map: map
  });
  marker1.setMap(map);   
}

//validar si el navegador soporta el api
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(mostrarUbicacion);
}  
//obtenemos las coordenadas del usuario
function mostrarUbicacion(ubicacion) {  
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;

    console.log(`latitud: ${ lat } | longitud: ${ lng }`);
    const coord = {lat:lat ,lng: lng}; //coordenadas de usuario
    const marker2 = new google.maps.Marker({      
      position: coord, 
      map: map
    });    
    marker2.setMap(map);
};

