import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Weather = (props) => {
  const [weather, setWeather] = useState({})

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&appid=008d1431cac5ab230c70b3325c006329&units=metric`)
      .then(r => {
        const temp = {

          speed:r.data.wind.speed,
          degrees:r.data.wind.deg,
          temp:r.data.main.temp,
          icon:r.data.weather[0].icon,

        }
        setWeather(temp)
      })
  },[props.capital])
  return(
    <React.Fragment>
      <h2>{`Weather in ${props.capital}`}</h2>

      <div>
        <p><span style={{fontWeight: "bold"}}>temperature: </span> {Math.round(weather.temp)}° Celsius </p>
        <img alt={weather} src={`https://openweathermap.org/img/wn/${weather.icon}.png`}/>
        <p><span style={{fontWeight: "bold"}}>wind: </span> {weather.speed} kph, direction {weather.degrees}° degrees </p>
      </div>
    </React.Fragment>
  )
}

export default Weather