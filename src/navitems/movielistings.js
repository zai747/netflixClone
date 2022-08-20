import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './movielistings.css'

function Movielistings({url}) {
  const [Movies, setMovies] = useState([])
  useEffect(() => {
   axios.get(url).then((val) =>
  {
    setMovies(val.data.results)
    
  })
  }, [Movies])

  
  return (
    <div className='cards'> 
    {Movies.map((item) => {
      return(
        
        <li key={item.id}>
          <a href="#" class="card">
            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path}  class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <div class="card__header-text">
                  <h3 class="card__title">{item.title || item.name}</h3>            
                  <span class="card__status">Rating : {item.vote_average}  </span>
                </div>
              </div>
              <p class="card__description">{item.overview}</p>
            </div>
          </a>      
        </li>
      )
    })}
    </div>
  )  

}

export default Movielistings
