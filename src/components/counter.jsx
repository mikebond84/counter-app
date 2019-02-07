import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"]
  };

  handleQuantity = () => {
    console.log("clicked", this);
  };

  renderTags() {
    if (this.state.tags.length === 0) return null;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.state.tags.length === 0)
      return (
        <div className="m-4">
          <button className="btn btn-secondary btn-sm">Create Item</button>
        </div>
      );
    return (
      <div className="m-4">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleQuantity}
          className="btn btn-secondary btn-sm t-2"
        >
          Quantity
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "0" : count;
  }
}

export default Counter;
