import React from "react";
import CharacterInput from "./CharacterInput";
import Pagination from "./Pagination";

const Characters = () => {
  return (
    <>
      {/* search input */}
      <CharacterInput className={"container center"} />

      {/* [pagination] */}
      <Pagination className={"container"} pageLimit={5} dataLimit={12} />
    </>
  );
};

export default Characters;
