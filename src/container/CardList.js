import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        {this.props.cards.map(card => {
          return <img src={card.imageUrl} />
        })}
      </div>
    );
  }
}
