import React from 'react'
// import MovieList from './MovieList';
// import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    // const movies=useSelector(store=>store.movies);
    return  <div>
           <MovieList title={"Now Playing"}/>
        
        {/*

         MovieList - Popular
         MovieCard*n
         MovieList-Now Playing
         MovieList -Horror
        */}
    </div>;
  
};

export default SecondaryContainer