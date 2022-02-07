export default class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.description = document.getElementById('w-desc');
		this.tempString = document.getElementById('w-string');
		this.tempIcon = document.getElementById('w-icon');
		this.feelsLike = document.getElementById('w-feels-like');
		this.humidity = document.getElementById('w-humidity');
		// this.details = document.getElementById('w-details');
		// this.dewpoint = document.getElementById('w-dewpoint');
		// this.wind = document.getElementById('w-wind');
	}
	paint(weather) {
		this.location.textContent = weather.name;
		this.description.textContent = weather.weather[0].description;
		this.tempString.textContent = Math.round(weather.main.temp) + '°C';
		this.tempIcon.setAttribute(
			'src',
			`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
		);
		this.feelsLike.innerText = ` ${Math.round(weather.main.feels_like)}°C`;
		this.humidity.innerText = ` ${weather.main.humidity}%`;
		// this.wind.textContent = `Ταχύτητα ανέμου: ${weather.wind.speed} m/s`;
		// this.dewpoint.textContent = `Κατεύθυνση ανέμου: ${weather.wind.deg} μοίρες`;
	}
}