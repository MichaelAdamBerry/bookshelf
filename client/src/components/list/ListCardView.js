import React from "react";
import CoverImg from "../CoverImg";
import Stars from "../card/Stars";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CardSpring extends React.Component {
  state = { hovered: false };
  setHover = () => {
    this.setState({ hovered: true });
  };
  cancelHover = () => {
    this.setState({ hovered: false });
  };
  render() {
    const cardProps = {
      ...this.props
    };
    return (
      <Spring
        to={{
          scale: this.state.hovered ? "1.1" : "1",
          opacity: this.state.hovered ? 1 : 0.8
        }}>
        {({ scale, opacity }) => (
          <ListCardView
            onMouseOver={this.setHover}
            onMouseOut={this.cancelHover}
            style={{
              transform: `scale3d(${scale}, ${scale}, ${scale})`,
              opacity: opacity
            }}
            {...cardProps}
          />
        )}
      </Spring>
    );
  }
}

const ListCardView = props => {
  return (
    <div
      className="card"
      style={props.style}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}>
      <Link to={{ pathname: "/volume", search: `id=${props.id}` }}>
        {props.free && (
          <div className="ribbon">
            <span>Free!</span>
          </div>
        )}
        <div className="listCardWidth">
          <h4>{props.title}</h4>
          <div className="thumbnailContainer">
            <CoverImg imageLinks={props.imageLinks} maxRes={false} />
          </div>
          <div className="listCardWidth">
            <h5 data-testid="bookAuthor">{props.author}</h5>
          </div>
          <div>
            <h5>{props.publisher}</h5>
          </div>
          <div className="stars">
            {!props.averageRating === false && (
              <Stars averageRating={props.averageRating} />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

ListCardView.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  averageRating: PropTypes.number
};

export default CardSpring;
