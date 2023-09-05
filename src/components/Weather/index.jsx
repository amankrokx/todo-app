import { useEffect, useState } from 'react';
import './index.css';

function Weather () {
    const [city, setCity] = useState("")
    const [temperature, setTemperature] = useState(0)

    function getLocation () {
        return new Promise((resolve, reject) => {
            try {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&accept-language=en&polygon_threshold=0.0`, {
                                method: "GET",
                                headers: {
                                    "X-RapidAPI-Key": "15be109401msh039dc334993a18cp1b9113jsn7f88dd5900bf",
                                    "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
                                },
                            })
                                .then(res => res.json())
                                .then(res => {
                                    resolve({
                                        lat: position.coords.latitude,
                                        lon: position.coords.longitude,
                                        city: res.address.city,
                                        country: res.address.state
                                    })
                                })


                        },
                        (error) => {
                            throw new Error(error.message);
                        })
                } else throw new Error("Geolocation is not supported by this browser.");
            } catch (error) {
                fetch("http://ip-api.com/json")
                    .then(res => res.json())
                    .then(res => {
                        const { city, country, lat, lon } = res
                        resolve({ city, country, lat, lon })
                    })
                    .catch(err => reject(err))
            }
        })
    }

    useEffect(() => {
        (async () => {
            const { city = "N/A", country = "N/A", lat, lon } = await getLocation()
            setCity(`${city}, ${country}`)
            if (!lat || !lon) throw new Error("Location not found")
    
            const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b1741d4b9a702da375fddc8571ba4eaa`).then(res => res.json())
            setTemperature(Math.round(weather.main.temp - 273.15))
        })()
    }, [])

    console.log("Weather rendered");

    return (
        <section className="weather">
            <div className="cloud">
                <span className="material-icons">ac_unit</span>
            </div>
            <div className="info">
                <div className="temperature">
                    {temperature}°
                    <span>C</span>
                </div>
                <div className="city">{city}</div>
                <div className="activity-info">
                    <span className="material-icons">task_alt</span>
                    <span>Activities 4/10</span>
                </div>
            </div>
        </section>
    )
}

export default Weather;