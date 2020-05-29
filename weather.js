var key = "a0e01a58965bfa8692262f34f8375f72";

const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like")
const weather = document.getElementById("weather");
const humitity = document.getElementById("hum");
const weatherIcon = document.getElementById("weather-icon");


function UpdateWeatherData(lat, lng){
    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`,function(json){

        //`http://api.openweathermap.org/data/2.5/weather?q=${"Bischofshofen"}&APPID=${key}&units=metric
        temp.innerHTML = json.main.temp;
        feelsLike.innerHTML = json.main.feels_like;
        weather.innerHTML =  json.weather[0].main;
        humitity.innerHTML = json.main.humidity + "%";
        //locationInput.value = json.name;

        
        var iconCode = json.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        weatherIcon.src = iconUrl;


    });

}


