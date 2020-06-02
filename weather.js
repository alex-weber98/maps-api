var key = "a0e01a58965bfa8692262f34f8375f72";

const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like")
const weather = document.getElementById("weather");
const humitity = document.getElementById("hum");
const weatherIcon = document.getElementById("weather-icon");


function UpdateWeatherData(lat, lng){
    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`,function(json){

        //`http://api.openweathermap.org/data/2.5/weather?q=${"Bischofshofen"}&APPID=${key}&units=metric
        temp.innerHTML = Math.round(json.main.temp) + " °C";
        weather.innerHTML =  json.weather[0].main;
        humitity.innerHTML = json.main.humidity + "%";
        //locationInput.value = json.name;

        
        var iconCode = json.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        weatherIcon.src = iconUrl;

        ///
    });


    $.getJSON(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=a0e01a58965bfa8692262f34f8375f72&units=metric`,function(json){
        
        var labels = [];
        var dataMin = [];
        var dataMax = [];


        for(i = 0; i < json.daily.length; i++){
            dataMin.push(json.daily[i].temp.min);
            dataMax.push(json.daily[i].temp.max);
            labels.push(i);
        }
    
        UpdateChart("myChart", labels, dataMin, dataMax)

    });



}


