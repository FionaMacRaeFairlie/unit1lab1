import React, { Component } from 'react';
import BasicComponent from './basic';
import SimpleProp from './simpleProp'; 
import Recipe from './recipe';
import BarChartExample from './barchartexample';
import BarChartExample2 from './barchartexample2';

const recipeIngredients = [
"225g softened butter",
"225g golden caster sugar",
"4 large eggs",
"lemon, zested",
"1 tsp vanilla extract",
"225g self-raising flour",
"splash of milk",
"Optional fillings of lemon curd, jam, lightly whipped cream",
"icing sugar for dusting",
];
class App extends Component {
  divStyle={
    padding: "5%",
    margin: "10%",
    width: "50%",
    height: "50%"
    }
render() {
return (
  <div>
      <BasicComponent />
       <div> 
           <SimpleProp name="dog"></SimpleProp>  
           <SimpleProp name="cat"></SimpleProp> 
           <SimpleProp name="mouse"></SimpleProp> 
        </div> 
        <h1> Recipe </h1>
      <Recipe name={recipeIngredients} />
      <div style={this.divStyle}>
        <BarChartExample />
      </div>
      <div style={this.divStyle}>
        <BarChartExample2 />
      </div>
  </div>);
}
}
export default App;
