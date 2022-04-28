import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharacterContext = createContext({
  isLoading: false,
  error: null,
  data: [],
  getCharacterQuery: (query) => {},
});

const CharacterContextProvider = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
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
      <CharacterContext.Provider
        value={{
          isLoading,
          data,
          error,
          query,
          getCharacter: getCharacterQuery,
        }}
      >
        {props.children}
      </CharacterContext.Provider>
    </>
  );
};

export default CharacterContextProvider;
