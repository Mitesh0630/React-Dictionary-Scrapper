import React from "react";
import SearchItem from "./SearchItem";

const SearchList = (props) => {
  return (
    <>
      {props.data.map((data) => (
        <li key={data.partOfSpeech}>
          <SearchItem
            partOfSpeech={data.partOfSpeech}
            definations={data.definitions[0]}
            defination={data.definitions[0].definition}
            example={data.definitions[0].example}
            synonyms={data.definitions[0].synonyms}
          ></SearchItem>
        </li>
      ))}
    </>
  );
};

export default SearchList;
