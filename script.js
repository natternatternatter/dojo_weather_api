var cookiePopUp = document.querySelector(".bottomCookie");

function hide(element) {
    element.remove();
}

console.log("hello");
function changeTemp() {
    var temp = document.querySelector("#temperature");
    var fTemp
    if (temp.value == "farenheit") {
        console.log(temp.value);
    }
}


let displayCity = document.querySelector("#displayCity");
let navCity1 = document.querySelector("#navCity1")
let navCity2 = document.querySelector("#navCity2")
let navCity3 = document.querySelector("#navCity3")
let latitude;
let longitude;
let tempMax;
let tempMin;

function cityClick(element) {
    if (element.innerHTML != displayCity.innerHTML) {
        let holder = displayCity.innerHTML;
        displayCity.innerHTML = element.innerHTML;
        element.innerHTML = holder;
    }
    if (displayCity.innerHTML == "San Jose") {
        latitude = 37.3387;
        longitude = -121.8853;
    }
    if (displayCity.innerHTML == "Burbank") {
        latitude = 34.1808;
        longitude = -118.3090;
    }
    if (displayCity.innerHTML == "Chicago") {
        latitude = 41.8781;
        longitude = -87.6298;
    }
    if (displayCity.innerHTML == "Dallas") {
        latitude = 32.7767;
        longitude = -96.7970;
    }

    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,alerts&appid=`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            tempMax = response.daily[0].temp.max;
            console.log(tempMax)
            // check to see what day it is so we know what to display
            // grab that index to see the temp
        })
        .catch(err => console.log(err))

    console.log(tempMax)

}