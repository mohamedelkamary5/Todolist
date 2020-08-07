import React, { Component } from "react";
import "./AddItem.css";
class Additem extends Component {
  state = {
    name: "",
    age: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === "" || e.target.age.value === "") {
      return false;
    } else {
      this.props.itemsadd(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter name..."
            id="name"
            onChange={this.handelChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="enter age..."
            id="age"
            onChange={this.handelChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Additem;

// 6:00
