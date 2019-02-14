import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Stars = ({ averageRating }) => {
  //new Array with length of averageRating in whole numbers
  //Maps array to render Star icon, then renders Half Star if const partial is true
  const full = Number.parseInt(averageRating);
  const partial = Number(averageRating) % 1 > 0;
  return (
    <div style={{ display: "inline-flex" }}>
      {[...Array(full)].map((el, ind) => (
        <span key={Math.random() * 10}>
          <FontAwesomeIcon icon={faStar} style={{ color: "#e2c93d" }} />
        </span>
      ))}
      {partial && (
        <FontAwesomeIcon icon={faStarHalf} style={{ color: "#e2c93d" }} />
      )}
    </div>
  );
};

Stars.propTypes = {
  averageRating: PropTypes.number.isRequired
};

export default Stars;
