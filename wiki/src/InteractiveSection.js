import React, { Component } from "react";

import { SearchBar } from "./SearchBar";
import { List } from "./List";

export class InteractiveSection extends Component {
  state = {
    peopleFilter: null
  };

  handleChange = searchInput => {
    const result = this.props.data.filter(person => {
      return person.name.toLowerCase().search(searchInput.toLowerCase()) !== -1;
    });

    this.setState({ peopleFilter: result });
  };

  render() {
    return (
      <div className="Interactive">
        <h3>Fake JSON Database</h3>
        <SearchBar handleChange={this.handleChange} />
        {this.state.peopleFilter ? (
          <List
            p={this.state.peopleFilter}
            handleClick={this.props.handleClick}
          />
        ) : (
          <List p={this.props.data} handleClick={this.props.handleClick} />
        )}
      </div>
    );
  }
}
