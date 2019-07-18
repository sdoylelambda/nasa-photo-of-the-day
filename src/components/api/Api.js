import React, { useEffect, useState } from "react";
import axios from 'axios'

const Api = ( { limit }) => {

const [nasaPics, setNasaPics] = useState([])

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    // test url https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    .then(res => {
      const pics = res.data.photos
      setNasaPics(pics)
    })
})

  return (
    
      <div className="nasaPic-grid">
        <img src={nasaPics} style={{ maxWidth: "175px" }} imgUrl={nasaPics} />
  
      
      </div>
    
  );
}

export default Api;