import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

export const GenreList = () => {

const [genres, setGenres] = useState([]);
useEffect(() => {
  setGenres([
    { id: 1, genre_name: "action" },
    { id: 2, genre_name: "comedy" },
    { id: 3, genre_name: "cryme" },
  ]);
}, []);
  return (
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
  );
}
