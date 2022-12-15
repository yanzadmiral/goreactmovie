import React from "react";
import { Link } from "react-router-dom";

const MovieDetail = ({movie}) => {
  return (
    <>
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
  );
};

export default React.memo(MovieDetail);
