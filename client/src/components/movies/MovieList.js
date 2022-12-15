import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
     try {
       const result = await axios(`http://localhost:4000/movies`);
       await setMovies(result.data.movies);
       setLoaded(true);
     } catch (error) {
       setErrorMessage(error.response.data);
     }
    };
    fetchMovie();
  }, [])
  

  return (
    <>
      {!loaded ? (
        (() => {
          if (errorMessage) {
            return (
              <div className="row">
                <p>Opps....{errorMessage}</p>
              </div>
            );
          } else {
            return (
              <div className="row">
                <p>Loading</p>
              </div>
            );
          }
        })()
      ) : (
        <div className="row">
          {movies.map((movie, index) => (
            <div className="col-sm-4 mb-2" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                  <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MovieList