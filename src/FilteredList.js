
import React from 'react';
import { Component } from 'react';
import DisplayList from './DisplayList';
import CartList from './CartList';

//contains filtering/sorting/aggregator methods

class FilteredList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: "All",
        color: "All",
        sort: "None",
        total: 0.0,
        m: []
      }
    }

    onSelectFilterType = event => {
        this.setState({
            type: event.target.value,
        }) 
    };

    onSelectFilterColor = event => {
        this.setState({
            color: event.target.value,
        }) 
    };

    onSelectSort = event => {
        this.setState({
            sort: event.target.value,
        })
    }

    matchesFilters = item => {
        // all items should be shown when no filter is selected
        if ((this.state.type === "All" || this.state.type === item.type) && (this.state.color === "All" || this.state.color === item.color)) {
            return true
        } else {
            return false
        }  
    }


    addItem = (txt, price) => {
        let number = 1;
        let mm = [
            ...this.state.m,
            {
                name: txt,
                price: price,
                key: Date.now(),
            },
            ]
        this.setState({
            m: mm,
        })
        let t = Math.round((this.state.total + price) * 100) / 100;
        this.setState({
            total: t,
        })
    };
    
    removeM = (key, price) => {
        let mm = this.state.m.filter((m) => key != m.key);
        let tt = this.state.total - price;
        this.setState({
            m: mm
        })
        this.setState({
            total: tt
        })
    };
 
  
    render() {
      return (
        <div className="FilteredList">
           
            <div className="Left">
            <h2>Type</h2>
                <div className="LeftMenu" onChange={this.onSelectFilterType}>
                    <div className='input-radio'><input type="radio" value="All" name="type" /> All </div>
                    <div className='input-radio'><input type="radio" value="Berry" name="type" /> Berry</div>
                    <div className='input-radio'><input type="radio" value="Tree Fruit" name="type" /> Tree Fruit</div>
                    <div className='input-radio'><input type="radio" value="Vine Fruit" name="type" /> Vine Fruit</div>
                </div>
                <h2>Color</h2>
                <div className="LeftMenu" onChange={this.onSelectFilterColor}>
                    <div className='input-radio'><input type="radio" value="All" name="color" /> All</div>
                    <div className='input-radio'><input type="radio" value="Red" name="color" /> Red</div>
                    <div className='input-radio'><input type="radio" value="Green" name="color" /> Green</div>
                    <div className='input-radio'><input type="radio" value="Purple" name="color" /> Purple</div>
                    <div className='input-radio'><input type="radio" value="Black" name="color" /> Black</div>
                    <div className='input-radio'><input type="radio" value="Orange" name="color" /> Orange</div>
                    <div className='input-radio'><input type="radio" value="Blue" name="color" /> Blue</div>
                </div>
                <h2>Sort By </h2>
                <div className="LeftMenu" onChange={this.onSelectSort}>
                    <div className='input-radio'><input type="radio" value="None" name="sort" /> None</div>
                    <div className='input-radio'><input type="radio" value="Price" name="sort" /> Price</div>
                </div>
            </div>

            <div className="Middle">
              
                {/* <h2>Items:</h2> */}
                { (this.state.sort === "Price" ) ?
                    <DisplayList addItem={this.addItem} list={this.props.list.filter(this.matchesFilters).sort((a, b) => a.price - b.price)}/>
                    :
                    <DisplayList addItem={this.addItem}list={this.props.list.filter(this.matchesFilters)}/>
                
                }
               

                
            </div>
            
            <div className="Right">
                <h1>Cart</h1>
                <h2 className='bold'>Total: ${this.state.total.toFixed(2)}</h2>
                <div className="Right-con">
                    <CartList m={this.state.m} removeM={this.removeM} /> 
                </div>
            </div>

        </div>
      )
    }
  }

   export default FilteredList;
  