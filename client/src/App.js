import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import List from "./components/list/List";
import Volume from "./components/volume/Volume";
import {
  faStar,
  faStarHalf,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar, faStarHalf, faSpinner, fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch("/");
  }

  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <div className="main">
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/volume" component={Volume} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
