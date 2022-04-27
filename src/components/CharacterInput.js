import React, { useRef } from "react";
import classes from "./CharacterInput.module.css";

const CharacterInput = ({ onChange, className }) => {
  const inputRef = useRef();

  const handleQUeryChange = () => {
    // pass query value to parent componet
    onChange(inputRef.current.value);
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
          onChange={handleQUeryChange}
          ref={inputRef}
          autoFocus
        />
      </form>
    </>
  );
};

export default CharacterInput;
