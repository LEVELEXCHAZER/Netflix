import React, { useEffect, useState } from 'react'
import instance from '../requestApis/baseurl'
import'./Row.css'

function Row({title,fetchurl,change}) {

    const [movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";


    // api call function
    const fetchMovies=async()=>{
    const result=await instance.get(fetchurl)
    setMovies(result.data.results);

    }

    useEffect(()=>{
        fetchMovies()
    },[])

    // console.log(movies);

  return (
    <div className='row'>
        
        <h1>{title}</h1>
        <div className='movies'>
        {
            movies.length>0?movies.map(movie=>(
                
                    <img className='movie' src={`${base_url}${change?movie.backdrop_path:movie.poster_path}`}  alt="" />
                   

            )): <div style={{display: 'flex', justifyContent: 'space-evenly',width: '30%'}}>
                <i style={{color: 'red'}} class="fa-solid fa-spinner fa-3x fa-spin-pilse"></i>
               </div>
        }
        </div>
    </div>
  )
}

export default Row