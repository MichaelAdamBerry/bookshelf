import React from "react";
import Card from "../card/Card";
import PropTypes from "prop-types";
import CardSpring from "./ListCardView";
import Spinner from "../Spinner";
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
          <Spinner />
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
  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const { history } = this.props;
    const URLForQuery = "/list-data/" + query.q;
    const res = await fetch(URLForQuery);
    const results = await res.json();
    if (!results.data.items) {
      this.setState({ noResults: true });
      history.replace({ pathname: "/", state: { error: true } });
    } else {
      this.setState({ volumes: results.data.items });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
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
