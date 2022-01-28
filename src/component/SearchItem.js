import React, { useContext } from "react";
import classes from "./SearchItem.module.css";
import { Row, Col } from "antd";
import { Ctx } from "./SearchBar";
const SearchItem = (props) => {
  let finalStr;
  const fetchdata = useContext(Ctx);
  props.synonyms.sort();

  return (
    <>
      <div>
        <Row>
          <Col span={20} offset={2}>
            <section className={classes.summary}>
              <h2>Keyword:-"{props.partOfSpeech}"</h2>
              <p>
                <b>Definitions :- </b>
                {props.defination}
              </p>
              <p>
                <b>Example:- </b>
                {props.example === undefined
                  ? "There is No example available for this word"
                  : props.example}
              </p>
              <b>Synonyms:-</b>
              {props.synonyms.length > 0 && (
                <p className={classes.list}>
                  {props.synonyms.map((keyword) => (
                    <button
                      key={keyword}
                      className={classes.sysItems}
                      onClick={(event) => {
                        fetchdata(event.target.textContent);
                      }}
                    >
                      {
                        (finalStr =
                          keyword.charAt(0).toUpperCase() + keyword.slice(1))
                      }
                    </button>
                  ))}
                </p>
              )}
              {!props.synonyms.length > 0 && (
                <p>There are no Synonyms for this word in Dictionary</p>
              )}
            </section>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchItem;
