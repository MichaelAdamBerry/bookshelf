import React from "react";
import queryString from "query-string";
import { getVolume } from "../../utils/api/google";
import { Spring } from "react-spring/renderprops";
import Card from "../card/Card";
import VolumeCardView from "./VolumeCardView";
import PropTypes from "prop-types";
import Loading from "../Loading";

const RenderVolume = ({ volume }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
      {({ opacity }) => (
        <div style={{ opacity }}>
          <Card
            volume={volume}
            volumeInfo={volume.volumeInfo}
            render={({ props }) => {
              return <VolumeCardView {...props} />;
            }}
          />
        </div>
      )}
    </Spring>
  );
};

RenderVolume.propTypes = {
  volume: PropTypes.object.isRequired
};

export default class Volume extends React.Component {
  state = { loading: true };
  timer = setTimeout(() => {
    this.setState({ loading: false });
  }, 1000);

  async componentDidMount() {
    const urlStr = queryString.parse(this.props.location.search);
    const volume = await getVolume(urlStr.id);
    this.setState({ volume: volume });
    return this.timer;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    const { loading, volume } = this.state;
    return (
      <div>
        {!loading ? (
          <RenderVolume volume={volume} />
        ) : (
          <div className="volumeContainer" style={{ display: "flex" }}>
            <Loading style={{ alignItems: "center" }} />
          </div>
        )}
      </div>
    );
  }
}
