import React from "react";
import Search from "../search/Search";
import HomeSearchView from "./HomeSearchView";
import { Spring } from "react-spring/renderprops";
import Hero from "./Hero";

const HomeView = ({ fromError }) => {
  return (
    <div className="home" data-testid="home">
      <Spring
        from={{ height: 100, opacity: 0 }}
        to={{ height: 400, opacity: 1 }}>
        {({ height, opacity }) => <Hero style={{ height, opacity }} />}
      </Spring>
      <Search
        render={({ actions, query, noTextInput, emptySubmit }) => {
          return (
            <Spring
              delay={300}
              from={{ height: 100, opacity: 0 }}
              to={{ height: 400, opacity: 1 }}>
              {({ height, opacity }) => (
                <HomeSearchView
                  actions={actions}
                  query={query}
                  style={{ height, opacity }}
                  noTextInput={noTextInput}
                  emptySubmit={emptySubmit}
                  fromError={fromError}
                />
              )}
            </Spring>
          );
        }}
      />
    </div>
  );
};

export default class Home extends React.Component {
  render() {
    //if true fromError prop indicates a redirect from bad request
    const fromError = this.props.history.action === "REPLACE" ? true : false;

    return <HomeView fromError={fromError} />;
  }
}
