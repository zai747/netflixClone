import axios from 'axios'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { API_KEY } from '../url';
import './movielistings.css'
import {Link} from 'react-router-dom'

function Movielistings({url}) {
  const [Movies, setMovies] = useState([])
  const [Trailer, setTrailer] = useState([])
  
  useEffect(() => {
   axios.get(url).then((val) =>
  {
    setMovies(val.data.results)
    
  })
  }, [Movies])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }
  
  
  return (


    
    <div className='cards'> 
    {Movies.map((item,index) => {
      return(
        <div>
        <li key={item.id}>
        <Link to={`/moviedetails/${index}`} className="card" >

          {/* <a href="/moviedetails/${index}" > */}
            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path}  class="card__image" alt="" onClick={() => {
              axios.get(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {setTrailer(res.data.results[9].key)})
            }} />
            <div class="card__overlay" >
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <div class="card__header-text">
                  <h3 class="card__title">{item.title || item.name}</h3>            
                  <span class="card__status">Rating : {item.vote_average}  </span>
                </div>
              </div>
              <p class="card__description">{item.overview}</p>
            </div>
          {/* </a>   */}
          </Link>    
        </li>
       </div>
      )
    })}
    <YouTube videoId={Trailer} opts={opts}></YouTube> 
    </div>
  )  
  
}

export default Movielistings
