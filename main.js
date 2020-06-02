const locationInput = document.getElementById("locationInput");


function init(){
    
    initMap();

    var request = {
        query: locationInput.value,
        fields: ['name', 'geometry'],
    };
    PlaceFinder(request, placeUpdaterFromLocation);
}


locationInput.addEventListener('keypress', function(){
    if(event.keyCode == 13){

        var request = {
            query: locationInput.value,
            fields: ['name', 'geometry'],
        };
        PlaceFinder(request, placeUpdaterFromLocation);
    }
});


function placeUpdaterFromLocation(results, status){
    const location = results[0].geometry.location;

    deleteMarkers();
    MapUpdater(results, status);
    UpdateWeatherData(location.lat(), location.lng());
    locationInput.value = results[0].name;
}


function placeUpdaterFromMaps(result, status){

    console.log(result);

    if(typeof result.address.village !== "undefined"){
        locationInput.value = result.address.village;

    } else if (typeof result.address.town !== "undefined"){
        locationInput.value = result.address.town;

    } else if(typeof result.address.city !== "undefined"){
        locationInput.value = result.address.city;
    
    }else{
        locationInput.value = result.address.state;;

    }
    
    UpdateWeatherData(result.lat, result.lon);

}


function newLocation(mapsMouseEvent){
    var myLatlng;

    createMarker(mapsMouseEvent.latLng);

    var result = reverseGeo(mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng(), placeUpdaterFromMaps)  
}

window.addEventListener('load', function () {
    
  })