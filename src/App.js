import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';
import { PlaceholderButton } from 'react-bootstrap';


function App() {
  const productList = [

    {name: "Strawberries", type: "Berry", color: "Red", price: 3.50, "image": "images/strawberry.PNG"},
    {name: "Blueberries", type: "Berry", color: "Blue", price: 2.28, "image": "images/blueberry.PNG"},
    {name: "Raspberries", type: "Berry", color: "Red", price: 3.56, "image": "images/raspberry.PNG"},
    {name: "Marionberries", type: "Berry", color: "Black", price: 5.32, "image": "images/marion.PNG"},
    {name: "Salmonberries", type: "Berry", color: "Orange", price: 4.50, "image": "images/salmon.PNG"},
    {name: "Cherries", type: "Berry", color: "Red", price: 3.99, "image": "images/cherry.PNG"},

    {name: "Peach", type: "Tree Fruit", color: "Orange", price: 3.00, "image": "images/peach.PNG"},
    {name: "Plum", type: "Tree Fruit", color: "Purple", price: 1.20, "image": "images/plum.PNG"},
    {name: "Pear", type: "Tree Fruit", color: "Green", price: 2.40, "image": "images/pear.PNG"},
    {name: "Apple", type: "Tree Fruit", color: "Green", price: 0.80, "image": "images/apple.PNG"},
    {name: "Watermelon", type: "Vine Fruit", color: "Red", price: 3.25, "image": "images/watermelon.PNG"},
    {name: "Grapes", type: "Vine Fruit", color: "Purple", price: 4.64, "image": "images/grapes.PNG"}
   ]
   
  return (
    <div className="App">
        <img id="logo" src="images\kruse logo.png" alt="logo"></img>
        <div>
		      <FilteredList list={productList} />
	      </div>
    </div>
  );
}

export default App;
