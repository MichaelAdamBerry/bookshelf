import React from "react";
import PropTypes from "prop-types";

export function handleBadSrc(key) {
  const splitSrc = key.split(":");
  const imgSrc = splitSrc[0] === "https" ? key : "https:" + splitSrc[1];
  return imgSrc;
}

export function getSrc(imageLinks, maxRes) {
  const width = !maxRes ? "150px" : "350px";
  const height = !maxRes ? "300px" : "230px";
  if (!imageLinks) {
    return {
      key:
        "https://www.lse.ac.uk/International-History/Images/Books/NoBookCover.png",
      width: width,
      height: height
    };
  } else {
    const imgArr = Object.keys(imageLinks);
    const key = !maxRes ? imgArr[0] : imgArr[imgArr.length - 1];
    return { key: imageLinks[key], width: width, height: height };
  }
}

export default class CoverImg extends React.Component {
  state = { src: "", noImage: false };

  static propTypes = {
    maxRes: PropTypes.bool.isRequired
  };

  render() {
    //place holder if no image. Else if maxRes is true, highest resolution img, else lowest resolution
    const { imageLinks, maxRes } = this.props;
    const { key, width } = getSrc(imageLinks, maxRes);
    const imgSrc = handleBadSrc(key);

    return (
      <div style={{ height: "inherit", overflow: "hidden" }}>
        <img
          src={imgSrc}
          alt="book cover"
          style={{ height: "auto", width: `${width}` }}
        />
      </div>
    );
  }
}
