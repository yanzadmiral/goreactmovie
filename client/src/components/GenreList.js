import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

export const GenreList = () => {

  const [genres, setGenres] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const fetchMovie = async () => {
    try {
      const result = await axios(`http://localhost:4000/genres`);
      await setGenres(result.data.genres);
      setLoaded(true);
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);

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
          {genres.map((genre, genre_idx) => (
            <div className="col-sm-2 mb-3" key={genre_idx}>
              <div className="card">
                <div className="card-body">
                  <Link to={`/genres/${genre.id}`}>{genre.genre_name}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
