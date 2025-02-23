document.getElementById("searchButton").addEventListener("click", click)
let temp = 0;
let hightemp = 0;
let lowtemp = 0;
async function click() {
    let city = document.getElementById("searchInput").value;
    try
    {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&${CONFIG.API_KEY}`
        const response = await fetch(url);
        const result = await response.json();
        let tempElement = document.getElementById("temperature");
        temp = result.main.temp;
        hightemp = result.main.temp_max;
        lowtemp = result.main.temp_min;
        document.getElementById("temperature").innerText = (result.main.temp - 273.15).toFixed(2) + "°C";
        document.getElementById("sky").innerHTML = `${result.weather[0].main} <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}.png" alt="${result.weather[0].description}">`;
        document.getElementById("hilo").innerText = "H:" + (result.main.temp_max - 273.15).toFixed(0) + "°C " + " L:" + (result.main.temp_min - 273.15).toFixed(0) + "°C";
        document.getElementById("visibility").innerText = (result.visibility)+" m";
        document.getElementById("humidity").innerText = (result.main.humidity)+" %";
        document.getElementById("wind").innerText = (result.wind.speed)+" m/s";
    }
    catch
    {
        alert("This City Does Not Exist")
    }
    document.getElementById("fahrenheit").addEventListener("click",() =>
    {
        document.getElementById("temperature").innerText = (((temp - 273.15)*9/5)+32).toFixed(2) + "°F ";
        document.getElementById("hilo").innerText = "H:" + (((hightemp - 273.15)*9/5)+32).toFixed(0) + "°F" + " L:" + (((lowtemp - 273.15)*9/5)+32).toFixed(0) + "°F";
    })
    document.getElementById("celsius").addEventListener("click", () =>
    {
        document.getElementById("temperature").innerText = (temp - 273.15).toFixed(2) + "°C ";
        document.getElementById("hilo").innerText = "H:" + (hightemp - 273.15).toFixed(0) + "°C " + " L:" + (lowtemp - 273.15).toFixed(0) + "°C";
    })
}