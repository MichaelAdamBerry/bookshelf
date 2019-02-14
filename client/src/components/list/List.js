import React from "react";
import { getVolumeList } from "../../utils/api/google";
import Card from "../card/Card";
import PropTypes from "prop-types";
import CardSpring from "./ListCardView";
import Loading from "../Loading";
import queryString from "query-string";

const ListItem = ({ volume }) => {
  return (
    <Card
      volume={volume}
      volumeInfo={volume.volumeInfo}
      render={({ props }) => {
        return <CardSpring {...props} />;
      }}
    />
  );
};
ListItem.propTypes = {
  volume: PropTypes.object.isRequired
};

export const ListView = ({ volumes, loading }) => {
  return (
    <div data-testid="listWrapper" className="listWrapper">
      {!loading ? (
        volumes.map(volume => (
          <ListItem volume={volume} key={Math.random() * 10} />
        ))
      ) : (
        <div
          className="listContainer"
          style={{ display: "flex", alignItems: "center", minHeight: "100vh" }}>
          <Loading />
        </div>
      )}
    </div>
  );
};

ListView.propTypes = {
  volumes: PropTypes.array,
  loading: PropTypes.bool
};

class List extends React.Component {
  state = { loading: true };
  timer = setTimeout(() => {
    this.setState({ loading: false });
  }, 1000);
  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const { history } = this.props;
    const volumes = await getVolumeList(query.q);
    //handle no results from google
    if (volumes === false) {
      console.warn("the query string did not return any results from google");
      history.replace({ pathname: "/", state: { error: true } });
    } else {
      this.setState({ volumes: volumes, query: query.q });
    }
    return this.timer;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { volumes, noResults, loading } = this.state;
    return (
      <div className="listContainer">
        <ListView volumes={volumes} noResults={noResults} loading={loading} />
      </div>
    );
  }
}

export default List;
