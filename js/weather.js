$(document).ready(function() {
    function getWeather() {
        console.log("Getting the weather...");

        $.getJSON('http://api.wunderground.com/api/Your_Key/alerts/conditions/forecast/hourly/q/State-Abbreviation/City.json', function (data) {
            $(".city").html(data.current_observation.display_location.city);
            $(".state").html(data.current_observation.display_location.state);
            $(".weather").html(data.current_observation.weather);
            $(".header .temp_f span, .temp_f.inline").html(data.current_observation.temp_f);

            $(".hour.one .time").html(data.hourly_forecast[0].FCTTIME.civil);
            $(".icon-now img, .hour.one img").attr("src", data.hourly_forecast[0].icon_url);
            $(".hour.one .temp").html(data.hourly_forecast[0].temp.english);

            $(".hour.two .time").html(data.hourly_forecast[2].FCTTIME.civil);
            $(".hour.two img").attr("src", data.hourly_forecast[2].icon_url);
            $(".hour.two .temp").html(data.hourly_forecast[2].temp.english);

            $(".hour.three .time").html(data.hourly_forecast[4].FCTTIME.civil);
            $(".hour.three img").attr("src", data.hourly_forecast[4].icon_url);
            $(".hour.three .temp").html(data.hourly_forecast[4].temp.english);

            $(".hour.four .time").html(data.hourly_forecast[6].FCTTIME.civil);
            $(".hour.four img").attr("src", data.hourly_forecast[6].icon_url);
            $(".hour.four .temp").html(data.hourly_forecast[6].temp.english);

            $(".hour.five .time").html(data.hourly_forecast[8].FCTTIME.civil);
            $(".hour.five img").attr("src", data.hourly_forecast[8].icon_url);
            $(".hour.five .temp").html(data.hourly_forecast[8].temp.english);
            
            $(".hour.six .time").html(data.hourly_forecast[10].FCTTIME.civil);
            $(".hour.six img").attr("src", data.hourly_forecast[10].icon_url);
            $(".hour.six .temp").html(data.hourly_forecast[10].temp.english);
            
            $(".hour.seven .time").html(data.hourly_forecast[12].FCTTIME.civil);
            $(".hour.seven img").attr("src", data.hourly_forecast[12].icon_url);
            $(".hour.seven .temp").html(data.hourly_forecast[12].temp.english);
            
            $(".hour.eight .time").html(data.hourly_forecast[14].FCTTIME.civil);
            $(".hour.eight img").attr("src", data.hourly_forecast[14].icon_url);
            $(".hour.eight .temp").html(data.hourly_forecast[14].temp.english);
            
            $(".hour.nine .time").html(data.hourly_forecast[16].FCTTIME.civil);
            $(".hour.nine img").attr("src", data.hourly_forecast[16].icon_url);
            $(".hour.nine .temp").html(data.hourly_forecast[16].temp.english);
            
            $(".hour.ten .time").html(data.hourly_forecast[18].FCTTIME.civil);
            $(".hour.ten img").attr("src", data.hourly_forecast[18].icon_url);
            $(".hour.ten .temp").html(data.hourly_forecast[18].temp.english);
            
            $(".hour.eleven .time").html(data.hourly_forecast[20].FCTTIME.civil);
            $(".hour.eleven img").attr("src", data.hourly_forecast[20].icon_url);
            $(".hour.eleven .temp").html(data.hourly_forecast[20].temp.english);

            $(".hour.twelve .time").html(data.hourly_forecast[22].FCTTIME.civil);
            $(".hour.twelve img").attr("src", data.hourly_forecast[22].icon_url);
            $(".hour.twelve .temp").html(data.hourly_forecast[22].temp.english);

            $(".pop").html(data.hourly_forecast[0].pop);
            $(".humidity").html(data.current_observation.relative_humidity);
            $(".wind_mph").html(data.current_observation.wind_mph);
            $(".feels_like").html(data.current_observation.feelslike_f);
            $(".precip_in").html(data.current_observation.precip_today_in);
            $(".pressure_in").html(data.current_observation.pressure_in);
            $(".visibility").html(data.current_observation.visibility_mi);
            $(".uv").html(data.current_observation.UV);
        });
    }

    getWeather();

    // Every 15 minutes, fetch new weather
    setInterval(getWeather, 900000);
});