var key = "a0e01a58965bfa8692262f34f8375f72";

const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like")
const weather = document.getElementById("weather");
const humitity = document.getElementById("hum");
const weatherIcon = document.getElementById("weather-icon");
const weatherIconsDiv = document.getElementById("weather-icons")


async function UpdateWeatherData(lat, lng){
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`,function(json){


        //`http://api.openweathermap.org/data/2.5/weather?q=${"Bischofshofen"}&APPID=${key}&units=metric
        temp.innerHTML = Math.round(json.main.temp) + " °C";
        weather.innerHTML =  json.weather[0].main;
        humitity.innerHTML = json.main.humidity + "%";
        //locationInput.value = json.name;

        
        var iconCode = json.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
        weatherIcon.src = iconUrl;


    });


    $.getJSON(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=a0e01a58965bfa8692262f34f8375f72&units=metric`,function(json){
        
        var labels = [];
        var dataMin = [];
        var dataMax = [];
        var des = []

        weatherIconsDiv.innerHTML = "";

        for(i = 0; i < json.daily.length; i++){
            dataMin.push(json.daily[i].temp.min);
            dataMax.push(json.daily[i].temp.max);
            des.push(json.daily[i].weather[0].main);
                    
            if(i < 1){
                labels.push("Today");
            }
            else{
                labels.push(getDay(getDate(i - 1)));
            }
            
            var iconCode = json.daily[i].weather[0].icon;
            var img = document.createElement("img");
            img.className = "weather-icons-icon"
            img.src = "https://openweathermap.org/img/w/" + iconCode + ".png";
            weatherIconsDiv.appendChild(img);

        }
        UpdateChart("myChart", labels, dataMin, dataMax)
     
    });


/*
    $.getJSON(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=a0e01a58965bfa8692262f34f8375f72&units=metric`,function(json){

        var dailyData = json.daily;

        var data = [];


        for(i = 0; i < dailyData.length; i++){
            var day = "";

            if(i < 1){
                day = "Today";
            }
            else{
                day = getDay(getDate(i - 1));
            }
            
            var oneDataSet = { label: day, y: [dailyData[i].temp.min, dailyData[i].temp.max], name: dailyData[i].weather[0].main }
            data.push(oneDataSet)
        }
       
        UpdateChartWithPics(data);
        
    });

*/


}

function getDate(i){

    var date = new Date();
    date.setDate(new Date().getDate() + i)
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    
    dateString = dd + '/' + mm + '/' +  yyyy;


    return date;
}


function getDay(date){
    var day = parseInt(date.getDay());
    var result;

    switch(day){
        case 0:
            result = "Monday";
            break;

        case 1:
            result = "Tuesday";
            break;

        case 2:
            result = "Wednesday";
            break;

        case 3:
            result = "Thursday";
            break;

        case 4:
            result = "Friday";
            break;

        case 5:
            result = "Saturday";
            break;

        case 6:
            result = "Sunday";
            break;

        default:
            result = "";      
            break;    
    }

    return result;
}



