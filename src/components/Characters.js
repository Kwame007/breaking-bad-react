import axios from "axios";
import React, { useEffect, useState } from "react";
import CaharacterInput from "./CharacterInput";
import Character from "./Character";
import classes from "./Characters.module.css";

const Characters = (props) => {
  // character states
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  // use effect
  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        // setIsLoading(false);
      });
  }, [query]);

  // lifting state
  const getCharacterQuery = (query) => {
    setQuery(query);
  };

  return (
    <>
      {/* search input */}
      <CaharacterInput
        className={"container center"}
        onChange={getCharacterQuery}
      />
      {/* error component] */}
      {error && <h3>Error occured</h3>}

      {/* loading component */}
      {isLoading && <h2>Loading</h2>}

      {/* character list */}
      <div className={`${classes.cards} ${props.className}`}>
        {!isLoading && data.length === 0 ? <h3>No character found</h3> : ""}

        {!isLoading &&
          data.map((character) => (
            <Character data={character} key={character.char_id} />
          ))}
      </div>
    </>
  );
};

export default Characters;
