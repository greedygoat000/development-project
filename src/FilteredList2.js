
// import { Component } from 'react';
// import DisplayList from './DisplayList';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import * as React from 'react';



// const FilteredList2 = (props) => {

//   const [size, setSize] = React.useState([]);
//   const [checked, setChecked] = React.useState(false);
  

//   const handleChange = () => {
//     setChecked(!checked);
//     console.log(props.list[1].name)
//     this.setState({
//                   size: "Desktop"
                  
      
//               }) 

//   };

//   return (
//     <div>
//       <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>

//       <p>Is "My Value" checked? {checked.toString()}</p>
//     </div>
//   );
//   };
 

  


// //contains filtering/sorting/aggregator methods

// // class FilteredList extends Component {
// //     constructor(props) {
// //       super(props);
// //       this.state = {
// //         size: "All",
// //         weight: "All",
// //         checkD: true,
// //         checkMedium: true,
// //         checkLarge: true

// //       }
    
// //     }



// //   // [checkedOne, setCheckedOne] = React.useState(false);
    

// //     onSelectFilterSize = event => {
// //        // this.setCheckDesktop(!this.checkDesktop);
// //         console.log("happening");
// //         this.setState({
// //             size: event,
            

// //         }) 
        
// //     };


// //     matchesFilterSize = item => {
// //         // all items should be shown when no filter is selected
// //         console.log("matches filter size");
// //         if(this.state.size === "All") { 
// //             return true
// //         } else if (this.state.size === item.size) {
// //             return true
// //         } else {
// //             return false
// //         }  
// //     }
  
// //     render() {
// //       return (
// //         <div className="FilteredList">
// //             {/* <Nav variant="tabs" activeKey="All" onSelect={this.onSelectFilterSize}>
// //                 <Nav.Item>
// //                     <Nav.Link eventKey="All" >
// //                         All
// //                     </Nav.Link>
// //                 </Nav.Item>
// //                 <Nav.Item>
// //                     <Nav.Link eventKey="Desktop" >
// //                         Desktop
// //                     </Nav.Link>
// //                 </Nav.Item>
// //                 <Nav.Item>
// //                     <Nav.Link eventKey="Medium" >
// //                         Medium
// //                     </Nav.Link>
// //                 </Nav.Item>
// //                 <Nav.Item>
// //                     <Nav.Link eventKey="Large" >
// //                         Large
// //                     </Nav.Link>
// //                 </Nav.Item>
// //                 </Nav> */}
// //                 <h2>Size</h2>

// //                 <label>Desktop</label>
// //                 <input eventKey="Desktop" value="Desktop" type="checkbox" checked={this.checkD} onChange={this.onSelectFilterSize}/>

// //                 {/* <label>medium</label>
// //                 <input eventKey="Medium" value="Medium" type="checkbox" checked={this.checkMedium} onChange={this.onSelectFilterSize}/>
                
// //                 <label>large</label>
// //                 <input eventKey="Large" value="Large" type="checkbox" checked={this.checkDesktop} onChange={this.onSelectFilterSize}/> */}


// //                 {/* <h2>Filter category 2</h2>
// //                 <label>weight 1</label>
// //                 <input type="checkbox" />
// //                 <label>weight 2</label>
// //                 <input type="checkbox" />
// //                 <label>weight 3</label>
// //                 <input type="checkbox" /> */}
// //                 <div><h2>Items:</h2></div>
// //             <DisplayList list={this.props.list.filter(this.matchesFilterSize)}/>
// //         </div>
// //       )
// //     }
// //   }

//    export default FilteredList2;
  