import { useEffect, useState } from "react";

function Weather() {
    useEffect

    // const fetchWeatherForecast = async () => {

    //     const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=780f3da01fd44156923151611232408&q=${currentCoordinates}&aqi=no`)
    //     const data = await response.json();

    // }
    let latitude = "";
    let longitude = "";
    function geoFindMe() {
        // const status = document.querySelector("#status");
  

        function success(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            //  status.textContent = "";
            console.log(latitude + "," + longitude)
            fetchData(latitude,longitude)
            
        
        
        }

        function error() {
            // status.textContent = "Unable to retrieve your location";

            return('Error detected')
        }

        if (!navigator.geolocation) {
            return "Geolocation is not supported by your browser";
        } else {
            // status.textContent = "Locating…";
            return navigator.geolocation.getCurrentPosition(success, error);
        }
    }
 
     async function fetchData(latitude,longitude) {
        console.log(latitude,longitude)
        const coordinate = latitude + ',' + longitude
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?
key=780f3da01fd44156923151611232408&q=${coordinate}&aqi=no`)

        const data = await response.json()
        console.log(data)
        return data
        

    }

    
return (
        <div>
            <h2> Currently in Putrajaya</h2>
            <div>
                <h3>{}</h3>
                <h4> </h4>
                <h3>Condition : </h3>
                <h3>Temperature : </h3>
            </div>

        </div>
    );

}

export default Weather;