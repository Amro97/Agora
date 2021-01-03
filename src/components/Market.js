import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item'

class Market extends Component {

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addItem(e.value)
    }
  }

  addItem = (itemName) => {
    this.props.market.addItem(itemName)
  }

  render() {
    return (
        <div className="market">
            <input onKeyDown={this.handleKeyDown}/>
            {this.props.market.items.map(item => <Item key={item.name} item={item} market={this.props.market}/>)}
        </div>
    )
  }
}

export default observer(Market)