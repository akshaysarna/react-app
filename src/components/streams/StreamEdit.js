import React from "react";

import { connect } from "react-redux";

import { fetchStreams } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStreams(id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProp = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    stream: state.streams[id]
  };
};

export default connect(
  mapStateToProp,
  { fetchStreams }
)(StreamEdit);
