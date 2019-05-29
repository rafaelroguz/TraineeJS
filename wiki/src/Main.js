import React, { Component } from "react";

import { InfoSection } from "./InfoSection";
import { InteractiveSection } from "./InteractiveSection";

export class Main extends Component {
  state = {
    people: [],
    selectedItem: {}
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ people: data });
      });
  };

  handleClick = item => {
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <div className="Container">
        <InfoSection item={this.state.selectedItem} />
        <InteractiveSection
          data={this.state.people}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
