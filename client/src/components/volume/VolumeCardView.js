import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Stars from "../card/Stars";
import BookFlipper from "./BookFlipper";

const Catagories = ({ categories }) => {
  return (
    <p>
      {categories.map(e => (
        <span key={Math.random() * 20}>{e} </span>
      ))}
    </p>
  );
};

Catagories.propTypes = {
  catagories: PropTypes.array
};

function VolumeCardView(props) {
  const {
    title,
    author,
    publishedDate,
    imageLinks,
    averageRating,
    description,
    pageCount,
    previewLink,
    categories
  } = props;
  return (
    <div className="volumeContainer">
      <div>
        <div className="miniHeader">
          <div
            className="titleInfo"
            style={{ justifyContent: "space-between" }}>
            <h5>{title}</h5>
            <p>{!publishedDate === "" && moment(publishedDate).format("Y")}</p>
            <div style={{ marginLeft: "1em" }}>
              {!averageRating === false && (
                <Stars averageRating={props.averageRating} />
              )}
            </div>
          </div>
          <div className="volumeAuthor">
            <h4>{author}</h4>
          </div>
          <div className="titleMeta">
            <p>{pageCount} pages</p>
            {!categories === false && <Catagories categories={categories} />}
          </div>
          <div>
            <BookFlipper
              imageLinks={imageLinks}
              description={description}
              previewLink={previewLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolumeCardView;
