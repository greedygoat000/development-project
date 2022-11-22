# Development

### Link to Deployed Website
https://greedygoat000.github.io/development-project/

### Goal and Value of the Application

This is a shopping website for Kruse Farms, an old road-side fruit market. This site will help them reach more customers! It will also enable pickup for shoppers, rather than them having to get out of their car to shop. 

### Usability Principles Considered

Cart/filetres/sort are all shown on one page for simplicity. Color scheme is simple and light, should calm the user. Text is bold and has adequate contrast. Alt texts are provided. 

### Organization of Components

--App
--FilteredList >contains> --CartList, --DisplayList

### How Data is Passed Down Through Components

There is a Filtered List (which is filter menu / sort menu / display area) which holds a DisplayList. FilteredList takes in (from App) the list of items and runs methods on these to filter/sort. States include the states of the filter/sort menus, as well as the aggregator (total price), and a list of the items that should be displayed. The Display list takes in as props the list of items that should be displayed. CartList takes in as props a list of items that should be in the cart. 

### How the User Triggers State Changes
By clicking add/remove from cart buttons, and by selecting sort/filter options.

