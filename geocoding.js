var token = "172105134c219b"


function reverseGeo(lat, lng, callback){

    var url = `https://us1.locationiq.com/v1/reverse.php?key=${token}&lat=${lat}&lon=${lng}&format=json`

    $.getJSON(url,function(json){

        callback(json);

    });
}
