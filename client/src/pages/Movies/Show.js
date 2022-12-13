import React from 'react'
import { useParams } from 'react-router-dom';

const Show = () => {
    let { id } = useParams();
  return (
    <>
      <h2>Movie: {id}</h2>
      <div className="float-start">
        <small>Rating: </small>
      </div>
      <div className="float-end">
        <span className="badge bg-secondary me-1">Action</span>
      </div>
      <div className="clearfix"></div>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped table-dark">
          <tbody>
            <tr>
              <td>title:</td>
            </tr>
            <tr>
              <td>Description</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Show