import React from "react";

import firebase from "firebase";

import "./App.css";
import { StyledFirebaseAuth } from "react-firebaseui";

firebase.initializeApp({
  apiKey: "AIzaSyD90Ihtw261H3_htifsVJoyTBPyx8tiL7w",
  authDomain: "authentication-firebase-2400c.firebaseapp.com",
});

class App extends React.Component {
  state = { isSingedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSingedIn: !!user });

      console.log(user);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Authenticate Yourself!</h1>

        {this.state.isSingedIn ? (
          <div>
            <h3>You are now Sign In!</h3>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              src={firebase.auth().currentUser.photoURL}
              style={{ padding: "20px" }}
              alt="display image"
            />
            <br />
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
