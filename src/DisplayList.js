import React from 'react';
import { Component } from 'react';


//maps each product from App.js to an HTML element or Component for render

class DisplayList extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
      return (
        <div className="DisplayList">
            { this.props.list.map(item => <div className="DisplayList-item" key={item.name}> <img src={item.image} alt="fruit image" /><h2>{item.name} </h2><h3>${(item.price).toFixed(2)}</h3> <button onClick={() => this.props.addItem(item.name, item.price)}>Add to Cart</button></div>)}
            
        </div>
      )
    }
  }

   export default DisplayList;
  