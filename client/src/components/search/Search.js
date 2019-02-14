import React from "react";
import { withRouter } from "react-router";

class Search extends React.Component {
  state = { query: "", noTextInput: true, emptySubmit: false };

  handleChange = event => {
    const value = event.target.value;
    const validateText = value === "";
    this.setState({ query: value, noTextInput: validateText });
  };

  handleSubmit = event => {
    const { history } = this.props;
    const { query, noTextInput } = this.state;
    event.preventDefault();
    if (noTextInput) {
      this.setState({ emptySubmit: true });
      return;
    }
    history.push({
      pathname: `/list`,
      search: `?q=${query}`
    });
  };

  getActions = () => {
    return {
      submitQuery: this.handleSubmit,
      typeLetter: this.handleChange
    };
  };

  render() {
    return this.props.render({ ...this.state, actions: this.getActions() });
  }
}

export default withRouter(Search);
