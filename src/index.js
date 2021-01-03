import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Item } from "./store/Item";
import { Inventory } from "./store/Inventory";

let potatoes = new Item("Potatoes")
let corn = new Item("Corn")
let sombreros = new Item("Sombreros")

let market = new Inventory()
market.items.push(potatoes)
market.items.push(corn)
market.items.push(sombreros)

ReactDOM.render(
  <React.StrictMode>
    <App market={market}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
