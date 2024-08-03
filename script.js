const apiKey="af94c52717fad546325677c3fe8c08a0";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const Weathericon=document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response=await fetch(apiURL+city+`&appid=${apiKey}`);
    var data=await response.json();


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        Weathericon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        Weathericon.src="clear.png";
    }
    else if(data.weather[0].main=="mist"){
        Weathericon.src="mist.png";
    }
    else if(data.weather[0].main=="rain"){
        Weathericon.src="rain.png";
    }
    else if(data.weather[0].main=="drizzle"){
        Weathericon.src="drizzle.png";
    }
    document.querySelector(".weather").style.display = "block";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

