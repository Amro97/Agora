import { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Market from "./components/Market";

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* {this.props.market.items.map(item => <Item key={item.name} item={item} market={this.props.market}/>)} */}
        <Market market={this.props.market} />
      </div>
    );
  }
}

export default observer(App);
