/* 날씨 정보 */
function weatherData(obj) {
    /* https://openweathermap.org/API */
    var url = 'https://api.openweathermap.org/data/2.5/weather';
    var appid = '23049ab1a6aab8c1e8771c11d2080f0b';
    var dataObj;
    if(obj == undefined) {
        /* 위치설정 안할 시 deault 서울 */
        dataObj = {'q':'Seoul', 'appid':appid};
    }else {
        dataObj = {'lat':obj.latitude, 'lon':obj.longitude, 'appid':appid};
    }
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
        async: "true",
        data : dataObj,
        success: function(data) {
            var icon;
            switch(data.weather[0].icon) {
                case '01d' :
                    icon = 'wi-day-sunny.svg';
                    break;
                case '01n' :
                    icon = 'wi-night-clear.svg';
                    break;
                case '02d' :
                    icon = 'wi-day-cloudy.svg';
                    break;
                case '02n' :
                    icon = 'wi-night-cloudy.svg';
                    break;
                case '03d' :
                    icon = 'wi-cloud.svg';
                    break;
                case '03n' :
                    icon = 'wi-cloud.svg';
                    break;
                case '04d' :
                    icon = 'wi-cloudy.svg';
                    break;
                case '04n' :
                    icon = 'wi-cloudy.svg';
                    break;
                case '09d' :
                    icon = 'wi-rain.svg';
                    break;
                case '09n' :
                    icon = 'wi-rain.svg';
                    break;
                case '10d' :
                    icon = 'wi-day-rain.svg';
                    break;
                case '10n' :
                    icon = 'wi-night-rain.svg';
                    break;
                case '11d' :
                    icon = 'wi-thunderstorm.svg';
                    break;
                case '11n' :
                    icon = 'wi-thunderstorm.svg';
                    break;
                case '13d' :
                    icon = 'wi-snow.svg';
                    break;
                case '13n' :
                    icon = 'wi-snow.svg';  
                    break; 
                case '50d' :
                    icon = 'wi-day-fog.svg';
                    break;
                case '50n' :
                    icon = 'wi-night-fog.svg'; 
                    break;
            }
         
            var temp = Math.round(data.main.temp- 273.15);
            var $weatherDiv = $('div.weather');
            var $weatherLocation = $('<span>').addClass('weatherCity').appendTo($weatherDiv); 
            var $weatherIcon = $('<img>').attr('src','/assets/weatherIcons/'+icon).css({'width':'25px', 'margin':'1px 3px 0px 3px'}).appendTo($weatherDiv); 
            var $weatherTemp = $('<span>').addClass('weatherTemp').appendTo($weatherDiv); 
           
            $weatherLocation.html(data.name +',&nbsp;'+ data.sys.country);     
            $weatherTemp.html(temp + '°C');
        }
    })



}
/* 현재 위치 */
function myLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
    }else {
        weatherData();
    }
    
}
/* 위치정보 success */
function success(data) {
    var obj = {};
    obj.latitude = data.coords.latitude;
    obj.longitude = data.coords.longitude;
    weatherData(obj);
}
/* 위치정보 fail */
function fail(data) {
    weatherData();
}   
myLocation();
