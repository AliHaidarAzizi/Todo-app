import { useEffect, useState } from "react";

function Weather() {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        geoFindMe();
    }, []);

   
    function geoFindMe() {
        
  

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchData(latitude,longitude) // why we do fetchData(latitude,longitude) not CoordinateData = latitude + ',' + longitude?
        }

        if (!navigator.geolocation) {
            return "Geolocation is not supported by your browser";
        } else {
            return navigator.geolocation.getCurrentPosition(success);
        }
    }

 
     async function fetchData(latitude,longitude) { //confused due to the above question 
        console.log(latitude,longitude)
        const coordinate = latitude + ',' + longitude
        
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?
key=780f3da01fd44156923151611232408&q=${coordinate}&aqi=no`)

        const data = await response.json()
        setWeatherData(data)
        

    }

    
return (
        <div className="text-white flex flex-col items-center">
            <h2> Currently in {weatherData?.location.name}</h2>
            <div className="flex gap-2 items-center justify-center">
                <img src={weatherData?.current.condition.icon} alt="" />
                <div>
                <h3 className=" text-xs">Condition : {weatherData?.current.condition.text} </h3>
                <h3 className="text-xs">Temperature : {weatherData?.current.temp_c}C&#176;
</h3>
                </div>
                
            </div>

        </div>
    );

}

export default Weather;