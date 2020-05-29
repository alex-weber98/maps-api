const locationInput = document.getElementById("locationInput");


function init(){
    
    initMap();

    var request = {
        query: locationInput.value,
        fields: ['name', 'geometry'],
    };
    PlaceFinder(request, placeUpdater);
}


locationInput.addEventListener('keypress', function(){
    if(event.keyCode == 13){

        var request = {
            query: locationInput.value,
            fields: ['name', 'geometry'],
        };
        PlaceFinder(request, placeUpdater);
    }
});


function placeUpdater(results, status){
    const location = results[0].geometry.location;

    deleteMarkers();
    MapUpdater(results, status);
    UpdateWeatherData(location.lat(), location.lng());
    locationInput.value = results[0].name;
}


function newLocation(mapsMouseEvent){
    var myLatlng;

    var infoWindow = new google.maps.InfoWindow(
        {content: 'Click the map to get Lat/Lng!', position: myLatlng});
    infoWindow.open(map);
    


    // Close the current InfoWindow.
     infoWindow.close();

     // Create a new InfoWindow.
     infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
     infoWindow.setContent(mapsMouseEvent.latLng.toString());
     infoWindow.open(map);
}