import React, { useContext, useState, useEffect, useReducer } from "react";
import Button from "./Button";
import classes from "./Pagination.module.css";
import Character from "./Character";
import { CharacterContext } from "../context/CharacterContextProvider";

//paginateDataReducer reducer function
const paginateDataReducer = (state, action) => {
  switch (action.type) {
    case "DATA_CHANGE":
      return { paginateData: action.paginateData };
    case "SET_NEW_DATA":
      return { paginateData: action.paginateData };
    default:
      return {
        paginateData: null,
      };
  }
};
//paginateDataReducer reducer function
const pagesReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGES":
      return { pages: action.value };

    default:
      return {
        pages: 1,
      };
  }
};

//curentPageReducer reducer function
const currentPageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return { currentPage: state.currentPage + 1 };

    case "PREV":
      return { currentPage: action.currentPage };

    default:
      return {
        pages: 1,
      };
  }
};

const Pagination = (props) => {
  const { data, isLoading, error } = useContext(CharacterContext);

  // manage paginateData states with useReducer
  const [state, dispatch] = useReducer(paginateDataReducer, {
    paginateData: null,
  });

  // manage pages states with useReducer
  const [PagesState, pagesDispatch] = useReducer(pagesReducer, {
    pages: null,
  });

  // manage current page state with useReducer
  const [currentPageState, currentPageDispatch] = useReducer(
    currentPageReducer,
    {
      currentPage: 1,
    }
  );

  // check for specific data change
  const { value: pagesValue } = PagesState;

  useEffect(() => {
    // check if data is valid
    if (data) {
      pagesDispatch({
        type: "SET_PAGES",
        value: Math.round(data.length / props.dataLimit),
      });

      // setPaginatedData(data);
      dispatch({
        type: "DATA_CHANGE",
        paginateData: data,
      });

      // get start and end index from original characters array {data}
      const startIndex =
        currentPageState.currentPage * props.dataLimit - props.dataLimit;

      const endIndex = startIndex + props.dataLimit;

      // update {pagenatedData} with sliced array {which will contain the paginated array to be renderd}
      dispatch({
        type: "SET_NEW_DATA",
        paginateData: data.slice(startIndex, endIndex),
      });
    }
  }, [pagesValue, data, props.dataLimit, currentPageState.currentPage]);

  // error message
  const errMessage = <h3 className={`container center`}>No character found</h3>;

  //get next page function
  const handleNextPage = () => {
    currentPageDispatch({
      type: "NEXT",
      currentPage: currentPageState.currentPage,
    });
  };

  // get previous page function
  const handlePrevPage = () => {
    currentPageDispatch({
      type: "PREV",
      currentPage: currentPageState.currentPage - 1,
    });
  };
  return (
    <>
      {/* error component] */}
      {error && errMessage}
      {!isLoading && data.length === 0 ? errMessage : ""}

      {/* loading component */}
      {isLoading && <h2>Loading</h2>}

      <div className={`${classes.cards} ${props.className}`}>
        {!isLoading && state.paginateData
          ? state.paginateData.map((character) => (
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
