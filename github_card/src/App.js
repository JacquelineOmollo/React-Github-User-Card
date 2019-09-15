import React from "react";
import "./App.css";
// import CardList from "./CardList";
import CardData from "./CardData";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: {},
      followers: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/JacquelineOmollo")
      .then(response => {
        // console.log("Success! ", card);
        this.setState({ card: response.data });
      })
      .catch(error => {
        console.log("error: ", error);
      });

    axios
      .get("https://api.github.com/users/JacquelineOmollo/followers")
      .then(response => {
        this.setState({ followers: response.data });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }

  render() {
    console.log(this.state.card);
    console.log(this.state.followers);
    return (
      <div className="App">
        <h1>User Github Card</h1>
        <img src={this.state.card.avatar_url} />
        <p>Name: {this.state.card.name}</p>
        <p>Location: {this.state.card.location}</p>
        <p>Following: {this.state.card.following}</p>

        {this.state.followers.map(follower => (
          <div key={follower.id}>
            <img src={follower.avatar_url} />
            <p>UserName: {follower.login}</p>
            <p>Following: {follower.following_url.length}</p>
            <p>Followers: {follower.followers_url.length}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
