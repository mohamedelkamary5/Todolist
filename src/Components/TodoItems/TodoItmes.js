import React from "react";
import "./TodoItems.css";
const Todoitems = (props) => {
  const { items, deletItem } = props;
  let length = items.length;
  const listItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={() => deletItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>not find the items</p>
  );
  return (
    <div className="ListItems">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
      </div>
      {listItems}
    </div>
  );
};

export default Todoitems;
