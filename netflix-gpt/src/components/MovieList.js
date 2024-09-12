import MovieCard from "./MovieCard"

const MovieList = ({title}) => {
    // console.log(movies);
  return ( 
    <div>
               <div className="text-red-500">
          <h1>{title}</h1>
         <div className="text-red-500">
          <MovieCard/>
         </div>
              </div>
    </div>
  );
};

export default MovieList;
