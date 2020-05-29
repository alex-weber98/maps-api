// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var service;
var infowindow;

var request = {
    query: 'Bischofshofen',
    fields: ['name', 'geometry'],
};


function initMap(){

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(
        document.getElementById('map'));

    service = new google.maps.places.PlacesService(map);
}

function PlaceFinder(request, callback){
    service.findPlaceFromQuery(request, callback); 
}


function MapUpdater(results, status){

    const location = results[0].geometry.location;
    var place = new google.maps.LatLng(location.lat(), location.lng());

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(
        document.getElementById('map'), {center: place, zoom: 14.5});

    service = new google.maps.places.PlacesService(map);


    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    
        map.setCenter(results[0].geometry.location);
    }

    map.addListener("click", function(mapsMouseEvent){

        newLocation(mapsMouseEvent);
    });


}




function query(request){
    
    
    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        
            map.setCenter(results[0].geometry.location);
        }

    });   
}


function createMarker(place) {   
    clearMarkers();
    addMarker(place.geometry.location);  
}



geocoder.geocode({'latLng': event.latLng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(map, marker);
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });

