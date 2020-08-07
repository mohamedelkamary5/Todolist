import React, { Component } from "react";
import Todoitems from "./Components/TodoItems/TodoItmes";
import Additem from "./Components/AddItem/AddItem";
import "./App.scss";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Mohamed", age: 20 },
      { id: 2, name: "Ghada", age: 21 },
      { id: 3, name: "Mostafa", age: 2 },
      { id: 4, name: "Ahmed", age: 2 },
    ],
  };

  deletItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="title-main">TodoList App</h1>
        <Todoitems items={this.state.items} deletItem={this.deletItem} />
        <Additem itemsadd={this.addItem} />
      </div>
    );
  }
}

export default App;

// let items = this.state.items
// let item = items.findIndex(item => item.id === id)
// items.splice(item, 1)
// this.setState({items})
