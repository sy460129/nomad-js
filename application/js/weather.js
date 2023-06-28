const API_KEY="0e157dd79ce860eb8e5eef66dcd83e04";
function GeoSuccess(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log(`my location is ${lat} ${lng}`);

    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        weather.innerText=`Weather : ${data.weather[0].main} / Temperature : ${data.main.temp}`;
        city.innerText=data.name;
    })
}
function GeoFail(){
    alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(GeoSuccess, GeoFail);