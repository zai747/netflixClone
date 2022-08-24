import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Moviedetails() {
    let { id } = useParams()
    // const [Movies, setMovies] = useState([])
    // useEffect(() => {
    //     axios.get(url).then((val) =>
    //    {
    //      setMovies(val.data.results)
         
    //     })
    // }, [])
    // console.log(Movies[id].title);

  return (
    <div style={{color:'red'}}>{id}</div>
  )
}

export default Moviedetails