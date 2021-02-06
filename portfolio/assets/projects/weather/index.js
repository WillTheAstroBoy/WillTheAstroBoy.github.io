

const form = document.querySelector(".search-form");

let city = "london";
let timeZoneApiKey = "AE3FNB7H6PRJ";
let apiKey = "a6fbd326020335242f15b2de9a4c52c4";


const temperatureC = document.querySelector(".temperature-container");

async function getWeather(){
	const getPromise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
	const response = await getPromise.json();
	const getTimePromise = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${timeZoneApiKey}&format=json&by=position&lat=${response.coord.lat}&lng=${response.coord.lon}`)
	const responseTime = await getTimePromise.json();
	
	const currentTime = responseTime.formatted;
	let hours = currentTime[11]+currentTime[12];
	hours = parseInt(hours);
	console.log(hours);
	let isItDay = false;

	

	if(hours > 7 & hours < 19){
		isItDay = true;
	}
	
	console.log(isItDay);

	let direction = "";
	let windD = response.wind.deg;
	windD = parseInt(windD);
	if(windD < 45){
		direction = "N";
	} else if (windD < 90) {
		direction = "N-E";
	} else if(windD < 135){
		direction = "E";
	} else if(windD < 180){
		direction = "S-E";
	} else if(windD < 225){
		direction = "S";
	} else if(windD < 270){
		direction = "S-W"
	} else if(windD < 315){
		direction = "W";
	} else {
		direction = "N";
	}

	
	console.log(response);
	let weatherInfo = response.weather[0].main.toLowerCase();
	let backgroundImage= "";

	if(weatherInfo == "clear"){
		if(isItDay){
			backgroundImage = "clear.jpg";
		} else {
			backgroundImage = "clearN.jpg";
		}
	} else if(weatherInfo == "clouds"){
		if(isItDay){
			backgroundImage = "cloudy.jpg";
		} else {
			backgroundImage = "cloudyN.jpg";
		}
	} else if(weatherInfo == "rain"){
		if(isItDay){
			backgroundImage = "rain.jpg";
		} else {
			backgroundImage = "rainN.jpg";
		}
	} else if(weatherInfo == "fog"){
		if(isItDay){
			backgroundImage = "fog.jpg";
		}else {
			backgroundImage = "fogN.jpg";
		}
	} else if(weatherInfo == "snow"){
		if (isItDay) {
			backgroundImage = "snow.jpg";
		}else {
			backgroundImage = "snowN.jpg";
		}
	} else if(weatherInfo == "mist"){
		if(isItDay){
			backgroundImage = "mist.jpg";
		} else {
			backgroundImage = "mistN.jpg";
		}
	}
	console.log(backgroundImage);

	document.querySelector(".main").style.backgroundImage = `url("${backgroundImage}")`;
	temperatureC.innerHTML = `

			<div class="city-name">${response.name}</div>
			<div class="temp container">
				<div class="container temp-row1">
					<div class="temp-num">${Math.floor(response.main.temp-273.15)}</div>
					<div class="degree">&#176</div>
				</div>
				<div class="weather">
					<div class="weather-feel-like">Feels like: ${Math.floor(response.main.feels_like-273.15)}&#176</div>
					<div class="min-max container">
						<div class="min">Min: ${Math.floor(response.main.temp_min-273.15)}&#176</div>
						<div class="max">Max: ${Math.floor(response.main.temp_max-273.15)}&#176</div>
					</div>
					<div class="weather-description">${response.weather[0].main}</div>
				</div>
				<div class="weather-more-info">
					${response.weather[0].description}
				</div>
			</div>
			<div class="temp-details container">
				<div class="card humidity "><img src="humidity.png" alt="humidity" class="humidity-img" /> <br/>Humidity<br/> ${response.main.humidity}%</div>
				<div class="card pressure"><img class="pressure-img" src="pressure.png" alt="pressure"> Pressure<br/> ${response.main.pressure}mb</div>
				<div class="card visibility"><img class="visibility-img" src="visibility.png" alt="visibility image" /> Visibility<br/> ${response.visibility}m</div>
				<div class="card wind">
					<span class="light">Wind:</span>
					${direction}
					<div class="wind-speed">Wind speed: <br/>${response.wind.speed} m/s</div>
				</div>

			</div>
	`;


}


getWeather();

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	city = e.target[0].value;
	e.target[0].value = "";
	
	document.querySelector(".temperature-container").innerHTML = "";
	getWeather();
	

});
