import React, { useContext, useState, useEffect, useReducer } from "react";
import Button from "./Button";
import classes from "./Pagination.module.css";
import Character from "./Character";
import { CharacterContext } from "../context/CharacterContextProvider";

const Pagination = (props) => {
  const { data, isLoading, error, pageLimit } = useContext(CharacterContext);
  const [paginateData, setPaginatedData] = useState(null);
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // manage states with useReducer
  const [state, dispatch] = useReducer(() => {}, { data: "" });

  useEffect(() => {
    // check if data is valid
    if (data) {
      setPages(Math.round(data.length / props.dataLimit));
      setPaginatedData(data);

      // get start and end index from original characters array {data}
      const startIndex = currentPage * props.dataLimit - props.dataLimit;
      const endIndex = currentPage + props.dataLimit - 1;

      // update {pagenatedData} with sliced array {which will contain the paginated array to be renderd}
      setPaginatedData((prevData) => prevData.slice(startIndex, endIndex));
    }
  }, [pages, data, props.dataLimit, currentPage]);

  // error message
  const errMessage = <h3 className={`container center`}>No character found</h3>;

  //get next page function
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // get previous page function
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <>
      {/* error component] */}
      {error && errMessage}
      {!isLoading && data.length === 0 ? errMessage : ""}

      {/* loading component */}
      {isLoading && <h2>Loading</h2>}

      <div className={`${classes.cards} ${props.className}`}>
        {!isLoading && paginateData
          ? paginateData.map((character) => (
              <Character data={character} key={character.char_id} />
            ))
          : ""}
      </div>
      <div className={`${classes.pages} ${props.className}`}>
        <Button onClick={handlePrevPage}>Prev</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </>
  );
};

export default Pagination;
