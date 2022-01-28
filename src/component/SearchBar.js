import React, { useRef, useState, createContext } from "react";

import classes from "./SearchBar.module.css";

import { Button, notification } from "antd";

import SearchList from "./SearchList";

const Ctx = createContext();

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const enteredSearchInput = useRef();

  const Notification = (type, word) => {
    if (type === "success") {
      notification[type]({
        message: "Spotted",
        description: `The word you are searching for is here ${word}`,
      });
    } else if (type !== "error") {
      notification[type]({
        message: "Something went wrong",
        description: `The word ${word}  you are searcing for is either not there in Dictionary or something went wrong `,
      });
    }
  };

  const FetchData = async (word) => {
    enteredSearchInput.current.value = word;
    setIsLoading(true);
    word = word.replace(/[&/\\#^+()$~%.'":*?<>{}!@]/g, "");
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        Notification("error", word);
        setIsError(true);
      } else {
        const data = await response.json();
        setResponseData(data[0].meanings);
        Notification("success", word);
        setIsFetched(true);
        setIsError(false);
      }
    } catch (error) {
      Notification("error", word);
    }
    setIsLoading(false);
  };

  const dataHandler = (event) => {
    event.preventDefault();
    const enteredValidSearch = enteredSearchInput.current.value.trim();

    if (!enteredValidSearch) {
      return;
    }

    FetchData(enteredValidSearch);
  };
  return (
    <>
      <div>
        <h2 className={classes.h2}>My Dictionary</h2>
        <input
          className={classes.input}
          ref={enteredSearchInput}
          type="text"
          placeholder="Search a Word"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              dataHandler(event);
            }
          }}
        />

        <br />

        {!isLoading && (
          <Button
            shape="round"
            size="large"
            type="primary"
            onClick={dataHandler}
          >
            Search
          </Button>
        )}
        {isLoading && (
          <Button shape="round" size="large" type="primary" loading>
            Loading
          </Button>
        )}

        {!isLoading && isFetched && !isError && (
          <ul>
            <Ctx.Provider
              value={(word) => {
                FetchData(word);
              }}
            >
              <SearchList data={responseData} />
            </Ctx.Provider>
          </ul>
        )}
      </div>
    </>
  );
};

export { Ctx };
export default SearchBar;
