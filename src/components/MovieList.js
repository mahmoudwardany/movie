import React from "react";
import { Row} from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginat from "./Paginat";
const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">Loading ....</h2>}
      {movies.length >= 1 ?(
          <Paginat getPage={getPage} pageCount={pageCount}/>
      ):null
      }
    
    </Row>
  );
};

export default MoviesList;