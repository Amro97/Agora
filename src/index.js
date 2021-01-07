import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Item } from "./store/Item";
import { Inventory } from "./store/Inventory";

let potatoes = new Item("Potatoes")
let corn = new Item("Corn")
let sombreros = new Item("Sombreros")

const inventory = new Inventory()

inventory.items.push(potatoes)
inventory.items.push(corn)
inventory.items.push(sombreros)


const stores = {inventory}

ReactDOM.render(
  <Provider {...stores}>
      <App />
  </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
