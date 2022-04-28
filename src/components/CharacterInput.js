import React, { useRef, useContext } from "react";
import { CharacterContext } from "../context/CharacterContextProvider";
import classes from "./CharacterInput.module.css";

const CharacterInput = ({ className }) => {
  const { getCharacter } = useContext(CharacterContext);
  const inputRef = useRef();

  const handleQueryChange = () => {
    // pass query value to parent componet
    getCharacter(inputRef.current.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.type);
  // };

  return (
    <>
      <form>
        <input
          type="text"
          className={`${className} ${classes.search}`}
          onChange={handleQueryChange}
          ref={inputRef}
          autoFocus
        />
      </form>
    </>
  );
};

export default CharacterInput;
