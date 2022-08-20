import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imageUrl, Originals } from '../url'
import './movielistings.css'

function Banner() {
  const [Movies, setMovies] = useState([])
  useEffect(() => {
   axios.get(Originals).then((val) =>
  {
    setMovies(val.data.results[Math.round(Math.random() *val.data.results.length-1)])
    
  })
  }, [])

  return (
    <div className='cards'> 
    
        <div style={{backgroundImage:`url(${imageUrl + Movies.backdrop_path})`,height:"600px",backgroundSize:"100% 100%"}} className="bannerimg">     
          
            
            <h2 className='bannerContent'>{Movies.title || Movies.name}</h2> 
            {/* <h3 className='bannerContent' >Rating : {Movies.vote_average}  </h3> */}
           
          
        </div>
      
   
    </div>
  )  

}

export default Banner
