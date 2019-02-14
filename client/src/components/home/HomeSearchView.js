import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeSearchView = ({
  actions,
  query,
  style,
  emptySubmit,
  noTextInput,
  fromError
}) => {
  return (
    <div className="homeSearch" data-testid="homeSearch" style={style}>
      <form onSubmit={actions.submitQuery}>
        <div className="welcomeTitle" data-testid="welcomeTitle">
          <h4>Enter a Title to Get Started</h4>
        </div>
        <div>
          <div className="textArea">
            <label htmlFor="search-input">Title: </label>
            <input
              className="homeSearch"
              id="search-input"
              name={query}
              aria-required="true"
              type="text"
              value={query}
              onChange={actions.typeLetter}
            />
            {emptySubmit && noTextInput ? (
              <p style={{ color: "red" }}>no search input</p>
            ) : (
              <></>
            )}
            {fromError && (
              <p style={{ color: "red" }}>
                Sorry, we couldn't find any books that matched your request
              </p>
            )}
            <Button onClick={actions.submitQuery} />
          </div>
        </div>
        <div className="sources">
          <p>
            Powered by
            <span
              style={{
                color: "#0266C8",
                marginLeft: "1em"
              }}>
              <FontAwesomeIcon
                icon={["fab", "google"]}
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </span>
          </p>
          <p>
            Crafted with
            <span style={{ color: "#43853d", margin: "0 1em 0 1em" }}>
              <FontAwesomeIcon
                icon={["fab", "node-js"]}
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </span>{" "}
            &
            <span style={{ color: "#61dafb", marginLeft: "1em" }}>
              <FontAwesomeIcon
                icon={["fab", "react"]}
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </span>
          </p>
          <span />
        </div>
      </form>
    </div>
  );
};

HomeSearchView.propTypes = {
  actions: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired
};

export default HomeSearchView;
