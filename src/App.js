import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { items } from "./test-data";

function compare(a, b) {
  let comparison = 0;
  if (b.vote > a.vote) {
    comparison = 1;
  } else if (b.vote < a.vote) {
    comparison = -1;
  }
  return comparison;
}

function App() {
  const [itemList, setItemList] = useState(items.sort(compare));

  const voteAddOne = id => {
    setItemList(
      itemList
        .map(item => {
          if (item.id === id) {
            return { ...item, vote: item.vote + 1 };
          }
          return item;
        })
        .sort(compare)
    );
  };

  const voteMinsOne = id => {
    setItemList(
      itemList
        .map(item => {
          if (item.id === id) {
            return { ...item, vote: item.vote - 1 };
          }
          return item;
        })
        .sort(compare)
    );
  };

  return (
    <div className="app">
      <ul className="items-list">
        {itemList.map(item => (
          <li key={item.id}>
            <Item
              item={item}
              voteMins={() => voteMinsOne(item.id)}
              voteAdd={() => voteAddOne(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
