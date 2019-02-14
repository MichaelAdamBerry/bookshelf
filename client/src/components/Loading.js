import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Spinner = () => {
  return (
    <div
      style={{
        margin: "auto"
      }}>
      <FontAwesomeIcon
        icon={faSpinner}
        className="faSpin"
        style={{ height: "3em", width: "3em", color: "white" }}
        spin
      />
    </div>
  );
};

const TryAgain = () => {
  return (
    <div>
      <p>
        Oops! Looks like the server is taking a while to process your request.
      </p>
      <p>Please return to search to try again</p>
      <Link to={"/"}>Back to Search</Link>
    </div>
  );
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeout: false };
    this.timer = setTimeout(() => {
      this.setState({ timeout: true });
    }, 10000);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  startTimer = () => {
    return this.timer;
  };

  render() {
    const { timeout } = this.state;
    return <>{!timeout ? <Spinner /> : <TryAgain />}</>;
  }
}
