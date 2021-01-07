import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item'

class Market extends Component {

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addItem(e.target.value)
    }
  }

  addItem = (itemName) => {
    this.props.inventory.addItem(itemName)
  }

  render() {
    let market = this.props.inventory
    return (
        <div className="market">
            <input onKeyDown={this.handleKeyDown}/>
            {market.items.map(item => <Item key={item.name} item={item} market={market}/>)}
            <span>{market.numItems}</span>
        </div>
    )
  }
}

export default inject('inventory')(observer(Market))