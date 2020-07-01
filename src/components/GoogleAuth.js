import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  //state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "716375483026-vuimnbq7bbdsi03ngimin0clli9g3cdg.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          /* 
            isSignedIn.listen() is call back function
            which is used to change the state of the our react component
            we have passed the onAuthChange Function in which we can manipulate the 
            state of our component.
          */
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    console.log(`isSignedIn----->${isSignedIn}`);
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    console.log(`In Sign In method`);
    this.auth.signIn();
  };

  onSignOutClick = () => {
    console.log(`In Sign Out method`);
    this.auth.signOut();
  };

  renderAuthButton() {
    console.log(`${this.props.isSignedIn}`);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui blue google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
    //console.log(`is user signed in -> ${this.state.isSignedIn}`);
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProp = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProp,
  { signIn, signOut }
)(GoogleAuth);
