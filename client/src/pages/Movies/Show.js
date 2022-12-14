import React, { useState, useEffect } from "react";
import { Link ,useParams } from 'react-router-dom';
import axios from "axios";

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
        <>
          <pre>{JSON.stringify(movie)}</pre>
          <h2>
            Movie: {movie.title} / ({movie.year})
          </h2>
          <div className="float-start">
            <small>Rating: {movie.mpaa_rating}</small>
          </div>
          <div className="float-end">
            {Object.entries(movie.genre).map((genre, index) => (
              <Link
                className="badge bg-secondary me-1"
                to={`/genres/${genre[0]}`}
                key={index}
              >
                {genre[1]}
              </Link>
            ))}
          </div>
          <div className="clearfix"></div>
          <hr />
          <div className="table-responsive">
            <table className="table table-striped table-dark">
              <tbody>
                <tr>
                  <td>title:</td>
                  <td>{movie.title}</td>
                </tr>
                <tr>
                  <td>{movie.description}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Runtime:</td>
                  <td>{movie.runtime} Minute(s)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default Show