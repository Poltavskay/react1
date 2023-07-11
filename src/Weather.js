import React from "react"
import axios from "axios"
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert (`The weather in ${response.data.name} is ${response.data.main.temp}C`)
    }
    let apiKey = "e9d05d67840ff687d98500d573c2f838";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="orange"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );

}