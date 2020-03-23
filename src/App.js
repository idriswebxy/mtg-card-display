import React from "react";
import "./App.css";
import Card from "./card/Card";
import axios from "axios";

class App extends React.Component {

  state = {
    cards: []
  }

  componentDidMount() {
    axios.get("https://api.magicthegathering.io/v1/cards")
      .then(res => this.setState({ cards: res.data.cards }))
    console.log(this.state.cards)  
  }

  render() {
    return (
      <div>
        <Card cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
