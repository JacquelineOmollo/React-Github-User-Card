import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // githubCard: "",
      card: {}
    };
  }
  componentDidMount() {
    console.log("what's up?");
    fetch("https://api.github.com/users/JacquelineOmollo")
      .then(res => res.json())
      .then(cards => console.log(cards))
      .catch(error => console.log("No Good", error));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.card !== this.state.cards) {
  //     console.log("it works");
  //     if (this.state.doggoText === "boxer") {
  //       console.log("not allowed");
  //       fetch("https://api.github.com/users/JacquelineOmollo")
  //         .then(res => res.json())
  //         .then(cards =>
  //           this.setState({ githubCard: "", card: cards.followers })
  //         )
  //         .catch(error => console.log("No Good", error));
  //     }
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.card.name}</h1>
          <p>{this.state.card.location}</p>
          <p>{this.state.card.following}</p>
        </header>
        {this.state.card.map(id => (
          <img
            key={this.state.card.id}
            width="200"
            src={"https://avatars0.githubusercontent.com/u/42282797?v=4"}
          />
        ))}
      </div>
    );
  }
}
export default App;
