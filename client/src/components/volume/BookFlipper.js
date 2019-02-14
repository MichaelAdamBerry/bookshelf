import React from "react";
import { Spring, config, animated as a } from "react-spring/renderprops";
import CoverImg from "../CoverImg";
import stripHtml from "string-strip-html";
import Button from "../Button";

export default class BookFlipper extends React.Component {
  state = { flipped: false };

  handleClick = () => {
    this.setState(prevState => ({ flipped: !prevState.flipped }));
  };

  render() {
    const { description, previewLink, imageLinks } = this.props;
    const { flipped } = this.state;
    return (
      <div onClick={this.handleClick} className="imgWrapper">
        <Spring
          config={key => (key === "opacity" ? config.gentle : config.slow)}
          to={{
            opacity: `${flipped ? "1" : "0"}`,
            transform: `perspective(600px) rotateY(${
              flipped ? "180" : "0"
            }deg)`,
            backgroundColor: `${flipped ? "#2f2f2f" : "#f7fbfc"}`
          }}>
          {({ opacity, transform }) => (
            <>
              <a.div
                className="c front"
                style={{
                  opacity: `${flipped ? "0" : "1"}`,
                  transform,
                  boxShadow: "rgb(51, 46, 46) 5px 5px 30px"
                }}>
                <Front imageLinks={imageLinks} />
              </a.div>
              <a.div
                className="c back"
                style={{
                  opacity,
                  transform,
                  border: "1.5px solid rgb(33, 33, 33)",
                  borderRadius: "3%",
                  boxShadow: "rgb(51, 46, 46) 5px 5px 30px"
                }}>
                <Back description={description} />
              </a.div>
              <a.div
                className="c"
                style={{
                  opacity
                }}>
                <div
                  style={{
                    height: "420px",
                    border: "solid 1px gray",
                    borderRadius: "3px",
                    margin: "1em",
                    overflow: "scroll"
                  }}>
                  <p>{stripHtml(description)}</p>
                  <div>
                    <a href={previewLink} hidden={!flipped}>
                      <Button innerText="View Preview" />
                    </a>
                  </div>
                </div>
              </a.div>
            </>
          )}
        </Spring>
      </div>
    );
  }
}

function Front({ imageLinks }) {
  return (
    <>
      <CoverImg imageLinks={imageLinks} maxRes={true} />
    </>
  );
}

function Back() {
  return <div className="back" />;
}
