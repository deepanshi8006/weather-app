//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
//65c7ad7f80dc5fa3d3256408f5f9333f
const apiKey="65c7ad7f80dc5fa3d3256408f5f9333f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    if( response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display = "none"
     }else{
    document.querySelector(".city").innerHTML= data.name;
    
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+`°C`
    document.querySelector(".humidity").innerHTML= data.main.humidity+`%`
    document.querySelector(".wind").innerHTML= data.wind.speed+` km/hr`
   if(data.weather[0].main == "Clear"){
 weatherIcon.src ="weather-app-img/images/clear.png"
   } else if (data.weather[0].main == "Clouds"){
    weatherIcon.src ="weather-app-img/images/clouds.png"
      }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src ="weather-app-img/images/drizzle.png"
          }else if (data.weather[0].main == "Snow"){
            weatherIcon.src ="weather-app-img/images/snow.png"
              }else if (data.weather[0].main == "Rain"){
                weatherIcon.src ="weather-app-img/images/rain.png"
                  }else if (data.weather[0].main == "Mist"){
                    weatherIcon.src ="weather-app-img/images/mist.png"
                      }

          
                      document.querySelector(".weather").style.display = "block";
                      document.querySelector(".error").style.display="none"
                      function setDynamicBackground(weatherCondition) {
                        const body = document.querySelector("body");
                        if (weatherCondition === "Clear") {
                            body.style.backgroundImage = "url('weather-app-img/images/clear-background.jpg')";
                        } else if (weatherCondition === "Clouds") {
                            body.style.backgroundImage = "url('weather-app-img/images/cloudy-background.jpg')";
                            
                        } else if (weatherCondition === "Drizzle") {
                            body.style.backgroundImage = "url('weather-app-img/images/rainy-background.jpg')";
                        } else if (weatherCondition === "Rain") {
                            body.style.backgroundImage = "url('weather-app-img/images/rain-background.jpg')";
                        } else if (weatherCondition === "Snow") {
                            body.style.backgroundImage = "url('weather-app-img/images/snowy-bg.jpg')";
                        } 
                        else {
                            body.style.backgroundImage = "url('weather-app-img/images/default.jpg')";
                        }
                    }
                    setDynamicBackground(data.weather[0].main)
                    }
}
searchbtn.addEventListener("click", () =>{
    checkWeather(searchbox.value);
    
})

