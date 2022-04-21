import './App.css';

function App() {         //   :)
  let weather = {
    
    apiKey: "21155f708c957d5fc264f08905db6419",

    zipCode: function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    },

    cityWeather: function(){
        this.cityFetchWeather(document.querySelector(".searchBar").value);
    },

    cityFetchWeather:function(cityName){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+this.apiKey+"&units=imperial")
        .then((response) => response.json())
        .then((data) => {
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let cityName = data.name;
            
            const cb = document.querySelector('.units');
            if(cb.checked){
                return fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=imperial")
                .then((response) => response.json())
                .then((data) => {
                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"});
                    let temp = Math.round(data.current.temp);
                    let feelsLike = Math.round(data.current.feels_like);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round(data.current.wind_speed);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }
                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = cityName;
                    document.querySelector(".temperature").innerText = temp+"°";
                    document.querySelector(".feelsLike").innerText = "feels like: "+feelsLike+"°";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"°";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"°";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"°";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"°";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"°";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"°";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"°";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"°";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"°";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"°";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"°";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"°";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"°";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"°";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png";
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png";
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png";

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;                })
            }
            else{
                return fetch(
                    "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=metric"
                )
                .then((response) => response.json())
                .then((data) => {

                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})

                    let temp = Math.round(data.current.temp);
                    let feelsLike = Math.round(data.current.feels_like);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round((data.current.wind_speed)*2.2);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }
                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = cityName;
                    document.querySelector(".temperature").innerText = temp+"°";
                    document.querySelector(".feelsLike").innerText ="feels like: "+ feelsLike+"°";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"°";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"°";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"°";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"°";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"°";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"°";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"°";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"°";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"°";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"°";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"°";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"°";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"°";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"°";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png"
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png"
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png"

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;
                })
            }
        })
    },

    fetchWeather: function(zipCode){
        fetch("https://api.openweathermap.org/geo/1.0/zip?zip="+zipCode+"&appid="+this.apiKey)
        .then((response) => response.json())
        .then((zipData) => {

            let name = zipData.name;
            let lat = zipData.lat;
            let lon = zipData.lon;

            const cb = document.querySelector('.units');
            
            if(cb.checked){

                return fetch(
                    "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=imperial"
                )
                .then((response) => response.json())
                .then((data) => {

                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})

                    let temp = Math.round(data.current.temp);
                    let feelsLike = Math.round(data.current.feels_like);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round(data.current.wind_speed);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }
                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = name;
                    document.querySelector(".temperature").innerText = temp+"°";
                    document.querySelector(".feelsLike").innerText ="feels like: "+ feelsLike+"°";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"°";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"°";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"°";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"°";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"°";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"°";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"°";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"°";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"°";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"°";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"°";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"°";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"°";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"°";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png"
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png"
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png"

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;                })
            }
            else{
                return fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=metric")
                .then((response) => response.json())
                .then((data) => {

                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})

                    let temp = Math.round(data.current.temp);
                    let feelsLike = Math.round(data.current.feels_like);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round((data.current.wind_speed)*2.2);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }

                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = name;
                    document.querySelector(".temperature").innerText = temp+"°";
                    document.querySelector(".feelsLike").innerText ="feels like: " +feelsLike+"°";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"°";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"°";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"°";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"°";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"°";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"°";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"°";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"°";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"°";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"°";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"°";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"°";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"°";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"°";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png"
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png"
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png"

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;                
                })
            }
        })
    }
    }
    const SearchFuncClick=()=>{
        const searchRequest = document.querySelector(".searchBar").value;
        document.querySelector(".weather").classList.add("visible");
        document.querySelector(".futureWeather").classList.add("visible");
        document.querySelector(".card").classList.add("visible");
        if(!isNaN(searchRequest)){
            weather.zipCode();
        }
        else{
            weather.cityWeather();
        }
    }

    const SearchFuncKey=(onKeyUp)=>{
        const searchRequest = document.querySelector(".searchBar").value;
        if(onKeyUp.key === 'Enter'){
            document.querySelector(".weather").classList.add("visible");
            document.querySelector(".futureWeather").classList.add("visible");
            document.querySelector(".card").classList.add("visible");
            if(!isNaN(searchRequest)){
                weather.zipCode();
            }
            else{
                weather.cityWeather();
            }
        }
    }

    const SwitchClick =()=>{
        const searchRequest = document.querySelector(".searchBar").value;
        if(!isNaN(searchRequest)){
            weather.zipCode();
        }
        else{
            weather.cityWeather();
        }
    }
    return (
        <div className="card">
            <div className = "search">
                <div className = "inputter">
                    <input type="text" className="searchBar" placeholder="location" spellcheck="false" onKeyUp={SearchFuncKey}/>
                    <button className="searchButton" onClick={SearchFuncClick}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></g></svg>
                    </button>
                </div>
                <label className="switch">
                    <input type="checkbox" className="units" onClick={SwitchClick}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="weather">
                <div className = "cityTime">
                    <h2 className="city"> </h2>
                    <h4 className="date"> </h4>
                </div>
                <div className="pretty">
                    <h1 className="temperature"> </h1>
                    <ul className="hiLow">
                        <li className="tempHigh"></li>
                        <li className="tempLow"></li>
                    </ul>
                    <img src="" alt="" className="icon"/>
                </div>
                <h2 className="feelsLike"> </h2>
                    <div className="description"></div>
                    <div className="humidity"></div>
                    <div className="wind"></div>
            </div>
            <div className="futureWeather">
            <div className="tomorrow">
                <ul className="hiLow">
                    <li className="weekday1"></li>
                    <img src="" alt="" className="tomorrowIcon"/>
                    <li className="tomorrowTempHigh"></li>
                    <li className="tomorrowTempLow"></li>
                </ul>
            </div>
            <div className="twoDays">
                <ul className="hiLow">
                    <li className="weekday2"></li>
                    <img src="" alt="" className="twoDaysIcon"/>
                    <li className="twoDaysTempHigh"></li>
                    <li className="twoDaysTempLow"></li>
                </ul>
            </div>
            <div className="threeDays">
                <ul className="hiLow">
                    <li className="weekday3"></li>
                    <img src="" alt="" className="threeDaysIcon"/>
                    <li className="threeDaysTempHigh"></li>
                    <li className="threeDaysTempLow"></li>
                </ul>
            </div>
            <div className="fourDays">
                <ul className="hiLow">
                    <li className="weekday4"></li>
                    <img src="" alt="" className="fourDaysIcon"/>
                    <li className="fourDaysTempHigh"></li>
                    <li className="fourDaysTempLow"></li>
                </ul>
            </div>
            <div className="fiveDays">
                <ul className="hiLow">
                    <li className="weekday5"></li>
                    <img src="" alt="" className="fiveDaysIcon"/>
                    <li className="fiveDaysTempHigh"></li>
                    <li className="fiveDaysTempLow"></li>
                </ul>
            </div>
            <div className="sixDays">
                <ul className="hiLow">
                    <li className="weekday6"></li>
                    <img srcName="" alt="" className="sixDaysIcon"/>
                    <li className="sixDaysTempHigh"></li>
                    <li className="sixDaysTempLow"></li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default App;
