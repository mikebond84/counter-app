import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag"]
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

  handleQuantity = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
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
          onClick={() => this.handleQuantity(this.product)}
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
