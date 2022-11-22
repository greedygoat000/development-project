import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';
import { PlaceholderButton } from 'react-bootstrap';


function App() {
  const productList = [

    {name: "Strawberries", type: "Berry", color: "Red", price: 3.50, "image": "images/strawberry.png"},
    {name: "Blueberries", type: "Berry", color: "Blue", price: 2.28, "image": "images/blueberry.png"},
    {name: "Raspberries", type: "Berry", color: "Red", price: 3.56, "image": "images/raspberry.png"},
    {name: "Marionberries", type: "Berry", color: "Black", price: 5.32, "image": "images/marion.png"},
    {name: "Salmonberries", type: "Berry", color: "Orange", price: 4.50, "image": "images/salmon.png"},
    {name: "Cherries", type: "Berry", color: "Red", price: 3.99, "image": "images/cherry.png"},

    {name: "Peach", type: "Tree Fruit", color: "Orange", price: 3.00, "image": "images/peach.png"},
    {name: "Plum", type: "Tree Fruit", color: "Purple", price: 1.20, "image": "images/plum.png"},
    {name: "Pear", type: "Tree Fruit", color: "Green", price: 2.40, "image": "images/pear.png"},
    {name: "Apple", type: "Tree Fruit", color: "Green", price: 0.80, "image": "images/apple.png"},
    {name: "Watermelon", type: "Vine Fruit", color: "Red", price: 3.25, "image": "images/watermelon.png"},
    {name: "Grapes", type: "Vine Fruit", color: "Purple", price: 4.64, "image": "images/grapes.png"}
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
