# Apple TV inspired weather display  

This was a weekend project to test out my Raspberry Pi. Layout and design was inspired by Apple TV's weather display, so I am taking no credit for coming up with either :)  

This is intended to be displayed on large screens such as a television or a large computer monitor. Weather Underground's API was used to fetch the weather data, and the app fetches new data every 15 minutes, by default. If JavaScript is not enabled (or if the appropriate WU values have not been entered) the weather displayed is static placeholder data hard-coded into the HTML file. When a valid API key, state, and city (correct formats can be found in the Weather Underground docs) have been entered into the `weather.js` file then the fetched weather data will override the default values. This is the line to edit in the `weather.js` file to fetch new data.  

`http://api.wunderground.com/api/Your_Key/alerts/conditions/forecast/hourly/q/State-Abbreviation/City.json`  

## Icon Sources  

Full-color weather icons are from Weather Underground. Here are the other icons used and their authors.  

**Umbrella (Chance of Rain)**  
http://www.flaticon.com/authors/eleonor-wang  
http://www.flaticon.com/free-icon/umbrella_130500  

**Rain cloud with sun behind (Humidity)**  
http://www.flaticon.com/authors/yannick  
http://www.flaticon.com/free-icon/raining-at-day-outlined-symbol_56235  

**Wind**  
http://www.flaticon.com/authors/yannick  
http://www.flaticon.com/free-icon/wind-weather-lines-group-symbol_55939  

**Thermometer (Feels Like)**  
http://www.flaticon.com/authors/yannick  
http://www.flaticon.com/free-icon/thermometer-outlined-symbol-of-stroke_55483  

**Rain (Precipitation)**  
http://www.flaticon.com/authors/robin-kylander  
http://www.flaticon.com/free-icon/cloud-with-rain-drops_52274  

**Sunglasses (Visibility)**  
http://www.flaticon.com/authors/yannick  
http://www.flaticon.com/free-icon/sunglasses-with-stripes_56363  

**Sun (UV Index)**  
http://www.flaticon.com/authors/catalin-fertu  
http://www.flaticon.com/free-icon/sun-day-weather-symbol_54455  