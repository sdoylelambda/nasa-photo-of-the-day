import React, { useEffect, useState } from "react";
import axios from 'axios'

const Api = ( { limit }) => {

const [nasaData, setNasaData] = useState([])

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    // test url https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    .then(res => {
      const data = res.data
      console.log(data)
      setNasaData(data)
    })
})

  return (
    
      <div className="nasaPic-grid">
        <img src={nasaData} style={{ maxWidth: "175px" }} imgUrl={nasaData} />
        <h1>{nasaData.date}</h1>
      
      </div>
    
  );
}

export default Api;