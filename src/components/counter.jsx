import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    // tags: []
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return null;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    // if (this.state.tags.length === 0)
    //   return (
    //     <div className="m-4">
    //       <button className="btn btn-secondary btn-sm">Create Item</button>
    //     </div>
    //   );
    // else
    return (
      <div className="m-2">
        {this.props.children}
        <button
          onClick={() => this.lessQuantity(this.product)}
          className="btn btn-warning btn-sm m-3"
        >
          <i className="fas fa-minus" />
        </button>

        <span className={this.getBadgeClasses()}>
          <h4>{this.formatCount()}</h4>
        </span>

        <button
          onClick={() => this.moreQuantity(this.product)}
          className="btn btn-primary btn-sm m-3"
        >
          <i className="fas fa-plus" />
        </button>
        <button className="btn-danger btn-xs m-4">
          <i className="far fa-trash-alt" />
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  moreQuantity = product => {
    this.setState{ value: this.state.value + 1 });
  };

  lessQuantity = product => {
    if (this.setState(this.state.value === 0)) {
      this.setState({ value: 0 });
    } else this.setState({ value: this.state.value - 1 });
  };

  getBadgeClasses() {
    let classes = "px-2 mx-auto badge badge-";
    classes += this.state.value === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
