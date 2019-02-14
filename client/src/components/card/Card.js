import React from "react";
import PropTypes from "prop-types";

//render prop Card should passes props to render prop to be consumed by List and Volume
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: this.props.volume,
      volumeInfo: this.props.volume.volumeInfo
    };
  }

  getValidProps = () => {
    //verifies that each prop exists in volumeInfo and returns prop object
    const volume = this.state.volume;
    const volumeInfo = this.state.volumeInfo;

    return {
      free: volume.accessInfo.viewability === "ALL_PAGES",
      id: volume.id,
      title: volumeInfo.title ? volumeInfo.title : "",
      author: volumeInfo.authors ? volumeInfo.authors[0] : "",
      averageRating: volumeInfo.averageRating ? volumeInfo.averageRating : 0,
      imageLinks: volumeInfo.imageLinks ? volumeInfo.imageLinks : "",
      description: volumeInfo.description ? volumeInfo.description : "",
      publishedDate: volumeInfo.publishedDate ? volumeInfo.publishedDate : "",
      pageCount: volumeInfo.pageCount ? volumeInfo.pageCount : "",
      publisher: volumeInfo.publisher ? volumeInfo.publisher : "",
      previewLink: volumeInfo.previewLink ? volumeInfo.previewLink : "",
      categories: volumeInfo.categories ? volumeInfo.categories : ""
    };
  };
  render() {
    return this.props.render({ props: this.getValidProps() });
  }
}

Card.propTypes = {
  volume: PropTypes.object.isRequired
};

export default Card;
