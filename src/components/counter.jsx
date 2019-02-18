import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
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
          onClick={() => this.decrement()}
          className="btn btn-info btn-sm m-3 rounded-circle"
        >
          <i className="fas fa-minus" />
        </button>

        <span className={this.getBadgeClasses()}>
          <h4>{this.formatCount()}</h4>
        </span>

        <button
          onClick={() => this.increment()}
          className="btn btn-primary btn-sm m-3 rounded-circle"
        >
          <i className="fas fa-plus" />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-xs m-4 rounded-bottom"
        >
          <i className="far fa-trash-alt" />
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  increment() {
    this.setState(prevState => ({
      value: this.state.value + 1
    }));
  }

  decrement() {
    if (this.state.value === 0) {
      this.setState({
        value: 0
      });
    } else {
      this.setState(prevState => ({
        value: this.state.value - 1
      }));
    }
  }

  getBadgeClasses() {
    let classes = "px-3 mx-auto badge badge-";
    classes += this.state.value === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
