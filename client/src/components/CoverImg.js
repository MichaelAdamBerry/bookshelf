import React from "react";
import PropTypes from "prop-types";

export default class CoverImg extends React.Component {
  state = { src: "", noImage: false };

  static propTypes = {
    maxRes: PropTypes.bool.isRequired
  };

  getSrc = () => {
    //place holder if no image. Else if maxRes is true, highest resolution img, else lowest resolution
    const { imageLinks, maxRes } = this.props;
    const width = !maxRes ? "150px" : "350px";
    const height = !maxRes ? "300px" : "230px";
    if (!imageLinks) {
      return {
        key:
          "http://www.lse.ac.uk/International-History/Images/Books/NoBookCover.png",
        width: width,
        height: height
      };
    } else {
      const imgArr = Object.keys(imageLinks);
      const key = !maxRes ? imgArr[0] : imgArr[imgArr.length - 1];
      return { key: imageLinks[key], width: width, height: height };
    }
  };

  render() {
    const src = this.getSrc();

    return (
      <div style={{ height: "inherit", overflow: "hidden" }}>
        <img
          src={src.key}
          alt="book cover"
          style={{ height: "auto", width: `${src.width}` }}
        />
      </div>
    );
  }
}
