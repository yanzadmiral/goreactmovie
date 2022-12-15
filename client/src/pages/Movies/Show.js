import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import MovieDetail from "../../components/movies/MovieDetail";

const Show = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

   useEffect(() => {
    const fetchMovie = async () => {
     try {
       const result = await axios(`http://localhost:4000/movie/${id}`);
       await setMovie(result.data.movie);
       setLoaded(true);
     } catch (error) {
       setErrorMessage(error.response.data);
     }
    };
    fetchMovie();
  })

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
        <MovieDetail movie={movie} />
      )}
    </>
  );
}

export default Show