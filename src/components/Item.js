import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Item extends Component {
    
  buyItem = (itemName) => {
    this.props.market.buyItem(itemName)
  }

  changePrice = (itemName) => {
    const newPrice = prompt("Please enter new location price", 69)
    this.props.market.changePrice(itemName, newPrice)
  }

  render() {
    return (
      <li className="items" onDoubleClick={()=>this.changePrice(this.props.item.name)}>
      {this.props.item.quantity} {this.props.item.name} available at {this.props.item.price}$ per item.
      <button onClick={()=>this.buyItem(this.props.item.name)}>Buy!</button>
      </li>)
  }
}

export default observer(Item)